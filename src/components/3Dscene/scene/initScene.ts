import * as THREE from "three";
import { Skybox } from "./Skybox";
import { InstancedBoxes } from "../Meshes/Box";
import { Player } from "../Meshes/Player";
import { Plane } from "../Meshes/Plane";
import { Capsule } from "../Meshes/capsule";
import { ThreeScene } from "./index";
import { setupPhysics } from "./setupPhysics";
import * as Rapier from "@dimforge/rapier3d-compat";

// Import post-processing modules
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export async function initScene(sceneInstance: ThreeScene) {
  const { container } = sceneInstance;
  sceneInstance.scene = new THREE.Scene();
  sceneInstance.camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  sceneInstance.camera.position.set(0, 1, 2);

  sceneInstance.renderer = new THREE.WebGLRenderer({ antialias: true });
  sceneInstance.renderer.setSize(container.clientWidth, container.clientHeight);
  sceneInstance.renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(sceneInstance.renderer.domElement);

  new Skybox(sceneInstance.scene);

  const ambientLight = new THREE.AmbientLight(0x404040, 19);
  sceneInstance.scene.add(ambientLight);
  const light = new THREE.PointLight(0xff0000, 10, 100);
  light.position.set(50, 50, 50);
  sceneInstance.scene.add(light);

  // Wait for physics world initialization
  const { physicsWorld } = await setupPhysics();
  sceneInstance.eventQueue = new Rapier.EventQueue(true);

  sceneInstance.box = new InstancedBoxes(sceneInstance.scene, physicsWorld, 10);
  sceneInstance.physicsWorld = physicsWorld;
  sceneInstance.plane = new Plane(sceneInstance.scene, physicsWorld);
  sceneInstance.player = new Player(
    sceneInstance.scene,
    physicsWorld,
    sceneInstance.camera,
    sceneInstance.renderer.domElement
  );
  sceneInstance.capsule = new Capsule(sceneInstance.scene, physicsWorld);

  // Add Fresnel Shader Effect
  addFresnelEffect(sceneInstance);
}

function addFresnelEffect(sceneInstance: ThreeScene) {
  const { renderer, scene, camera } = sceneInstance;

  // Create render target and post-processing composer
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  // Fresnel Shader Pass
  const fresnelShader = {
    uniforms: {
      tDiffuse: { value: null }, // Scene texture
      uFresnelScale: { value: 1.0 },
      resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D tDiffuse;
      uniform float uFresnelScale;
      uniform vec2 resolution;

      vec4 offsetLookup(vec2 offset) {
        return texture2D(tDiffuse, vUv + offset / resolution);
      }

      void main() {
        vec4 center = texture2D(tDiffuse, vUv);
        vec4 top = offsetLookup(vec2(0.0, 1.0));
        vec4 bottom = offsetLookup(vec2(0.0, -1.0));
        vec4 left = offsetLookup(vec2(-1.0, 0.0));
        vec4 right = offsetLookup(vec2(1.0, 0.0));
        vec4 topLeft = offsetLookup(vec2(-1.0, 1.0));
        vec4 topRight = offsetLookup(vec2(1.0, 1.0));
        vec4 bottomLeft = offsetLookup(vec2(-1.0, -1.0));
        vec4 bottomRight = offsetLookup(vec2(1.0, -1.0));

        vec4 sx = -topLeft - 2.0 * left - bottomLeft + topRight + 2.0 * right + bottomRight;
        vec4 sy = -topLeft - 2.0 * top - topRight + bottomLeft + 2.0 * bottom + bottomRight;
        float edge = sqrt(dot(sx, sx) + dot(sy, sy)) * uFresnelScale;
        edge = clamp(edge, 0.0, 1.0);

        vec3 edgeColor = vec3(0.0, 0.0, 0.0);
        gl_FragColor = vec4(mix(center.rgb, edgeColor, edge), 1.0);
      }
    `,
  };

  const fresnelPass = new ShaderPass(new THREE.ShaderMaterial(fresnelShader));
  composer.addPass(fresnelPass);

  // Store composer in scene instance for rendering
  sceneInstance.composer = composer;

  // Resize handling
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    composer.setSize(width, height);
    fresnelShader.uniforms.resolution.value.set(width, height);
  });

  // Override render loop
  function renderLoop() {
    requestAnimationFrame(renderLoop);
  }
  renderLoop();
}
