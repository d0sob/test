// src/components/3Dscene/scene/initScene.ts
import * as THREE from "three";
import { Skybox } from "./Skybox";
import { Box } from "../Meshes/Box";
import { Player } from "../Meshes/Player";
import { Plane } from "../Meshes/Plane";
import { FirstPersonControls } from "./Controls";
import { ThreeScene } from "./index";
import { setupPhysics } from "./setupPhysics";
import * as Rapier from "@dimforge/rapier3d";

export function initScene(sceneInstance: ThreeScene): void {
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

  sceneInstance.controls = new FirstPersonControls(
    sceneInstance.camera,
    sceneInstance.renderer.domElement
  );

  // Initialize the physics world first
  const { physicsWorld } = setupPhysics();

  sceneInstance.eventQueue = new Rapier.EventQueue(true);
  // Create the Box object with both the scene and physics world passed in
  sceneInstance.box = new Box(sceneInstance.scene, physicsWorld);
  sceneInstance.physicsWorld = physicsWorld;
  sceneInstance.plane = new Plane(
    sceneInstance.scene,
    sceneInstance.physicsWorld
  );
  sceneInstance.player = new Player(sceneInstance.scene);
}
