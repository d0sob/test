import * as THREE from "three";
import { initScene } from "./initScene";
import { animate } from "./animate";
import { setupEventListeners } from "./eventListeners";
import { InstancedBoxes } from "../Meshes/Box";
import { Player } from "../Meshes/Player";
import { Capsule } from "../Meshes/capsule";
import { Plane } from "../Meshes/Plane";
import { ThirdPersonControls } from "./Controls";
import * as Rapier from "@dimforge/rapier3d-compat";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";

export class ThreeScene {
  private static instance: ThreeScene;
  public scene!: THREE.Scene;
  public camera!: THREE.PerspectiveCamera;
  public renderer!: THREE.WebGLRenderer;
  public animationFrameId: number | null = null;
  public composer!: EffectComposer;

  // Add properties
  public physicsWorld!: Rapier.World;
  public eventQueue!: Rapier.EventQueue;
  public box!: InstancedBoxes;
  public player!: Player;
  public capsule!: Capsule;
  public plane!: Plane;
  public controls!: ThirdPersonControls;

  private constructor(public container: HTMLDivElement) {}

  public static async getInstance(
    container: HTMLDivElement
  ): Promise<ThreeScene> {
    if (!ThreeScene.instance) {
      ThreeScene.instance = new ThreeScene(container);
      await ThreeScene.instance.init(); // Ensure `init()` is awaited
    }
    return ThreeScene.instance;
  }

  private async init(): Promise<void> {
    await initScene(this); // Wait for the async `initScene` to complete
    setupEventListeners(this);
    this.animate();
  }

  public animate = (): void => animate(this);

  public dispose(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.renderer.dispose();
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
    ThreeScene.instance = undefined as unknown as ThreeScene;
  }
}
