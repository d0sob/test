import * as THREE from "three";
import { Skybox } from "./Skybox";
import { Box } from "../Meshes/Box";
import { Player } from "../Meshes/Player";
import { Plane } from "../Meshes/Plane";
import { Capsule } from "../Meshes/capsule";
import { FirstPersonControls } from "./Controls";
import { ThreeScene } from "./index";
import { setupPhysics } from "./setupPhysics";
import * as Rapier from "@dimforge/rapier3d-compat";

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
  container.appendChild(sceneInstance.renderer.domElement);

  new Skybox(sceneInstance.scene);

  const ambientLight = new THREE.AmbientLight(0x404040, 19); // color, intensity
  sceneInstance.scene.add(ambientLight);
  const light = new THREE.PointLight(0xff0000, 10, 100);
  light.position.set(50, 50, 50);
  sceneInstance.scene.add(light);

  sceneInstance.controls = new FirstPersonControls(
    sceneInstance.camera,
    sceneInstance.renderer.domElement
  );

  // Wait for the physics world to be initialized
  const { physicsWorld } = await setupPhysics(); // `await` ensures physics is initialized before proceeding

  sceneInstance.eventQueue = new Rapier.EventQueue(true);

  // Create the Box object with both the scene and physics world passed in
  sceneInstance.box = new Box(sceneInstance.scene, physicsWorld);
  sceneInstance.physicsWorld = physicsWorld;
  sceneInstance.plane = new Plane(
    sceneInstance.scene,
    sceneInstance.physicsWorld
  );
  sceneInstance.player = new Player(sceneInstance.scene,physicsWorld, sceneInstance.camera, sceneInstance.renderer.domElement);
  sceneInstance.capsule = new Capsule(sceneInstance.scene, physicsWorld);
}
