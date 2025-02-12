import * as THREE from "three";
import { initScene } from "./initScene";
import { animate } from "./animate";
import { setupEventListeners } from "./eventListeners";
import { Box } from "../Meshes/Box";
import { Player } from "../Meshes/Player";
import { Plane } from "../Meshes/Plane";
import { FirstPersonControls } from "./Controls";

export class ThreeScene {
  private static instance: ThreeScene;
  public scene!: THREE.Scene;
  public camera!: THREE.PerspectiveCamera;
  public renderer!: THREE.WebGLRenderer;
  public animationFrameId: number | null = null;

  // Add properties
  public box!: Box;
  public player!: Player;
  public plane!: Plane;
  public controls!: FirstPersonControls;

  private constructor(public container: HTMLDivElement) {}

  public static getInstance(container: HTMLDivElement): ThreeScene {
    if (!ThreeScene.instance) {
      ThreeScene.instance = new ThreeScene(container);
      ThreeScene.instance.init();
    }
    return ThreeScene.instance;
  }

  private init(): void {
    initScene(this);
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
