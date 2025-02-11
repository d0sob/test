// src/components/ThreeScene.ts
import * as THREE from "three";
import { Skybox } from "./Skybox";
import { Controls } from "./Controls";
import { Box } from "../Meshes/Box";
import { Player } from "../Meshes/Player";

const clock = new THREE.Clock();
export class ThreeScene {
  private static instance: ThreeScene;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: Controls;
  private animationFrameId: number | null = null;
  private box!: Box;
  private player!: Player;

  // Make the constructor private to prevent external instantiation
  private constructor(private container: HTMLDivElement) {}

  /**
   * Returns the singleton instance of ThreeScene.
   * If it doesn't exist, it will be created and initialized.
   * @param container The HTMLDivElement to render the scene in.
   */
  public static getInstance(container: HTMLDivElement): ThreeScene {
    if (!ThreeScene.instance) {
      ThreeScene.instance = new ThreeScene(container);
      ThreeScene.instance.init();
    }
    return ThreeScene.instance;
  }

  /**
   * Initialize the scene, camera, renderer, controls, and objects.
   * This method is called once upon the first instantiation.
   */
  private init(): void {
    // Set up the scene
    this.scene = new THREE.Scene();

    // Set up the camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 1, 2);

    // Set up the renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.container.appendChild(this.renderer.domElement);

    // Instantiate the skybox
    new Skybox(this.scene);

    // Instantiate the box mesh
    this.box = new Box(this.scene);
    this.player = new Player(this.scene);
    window.addEventListener("keydown", (event) => {
      if (event.key === "1") {
        this.player.switchAnimation("Idle");
      } else if (event.key === "2") {
        this.player.switchAnimation("Run");
      }
    });

    // Initialize the controls
    this.controls = new Controls(this.camera, this.renderer.domElement);

    // Listen to window resize events
    window.addEventListener("resize", this.onResize);

    // Start the animation loop
    this.animate();
  }

  /**
   * The main animation loop.
   */
  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);
    const deltaTime = clock.getDelta();
    this.controls.update();
    this.box.update();
    this.player.update(deltaTime);
    this.renderer.render(this.scene, this.camera);
  };

  /**
   * Handle window resize events.
   */
  private onResize = (): void => {
    const { clientWidth, clientHeight } = this.container;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(clientWidth, clientHeight);
  };

  /**
   * Dispose of the scene and clean up resources.
   */
  public dispose(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener("resize", this.onResize);
    this.controls.dispose();
    this.renderer.dispose();

    // Remove the renderer's DOM element from the container
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }

    // Clear the singleton instance (To to allow re-creation)
    ThreeScene.instance = undefined as unknown as ThreeScene;
  }
}
