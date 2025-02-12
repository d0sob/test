// src/components/ThreeScene.ts
import * as THREE from "three";
import { Skybox } from "./Skybox";
import { FirstPersonControls } from "./Controls";
import { Box } from "../Meshes/Box";
import { Player } from "../Meshes/Player";
import { Plane } from "../Meshes/Plane";

const clock = new THREE.Clock();
export class ThreeScene {
  private static instance: ThreeScene;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationFrameId: number | null = null;
  private box!: Box;
  private player!: Player;
  private plane!: Plane;

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

  private init(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 1, 2);

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
    this.plane = new Plane(this.scene);
    this.player = new Player(this.scene);

    window.addEventListener("keydown", (event) => {
      if (event.key === "1") {
        this.player.switchAnimation("Idle");
      } else if (event.key === "2") {
        this.player.switchAnimation("Run");
      }
    });

    // Initialize the controls
    new FirstPersonControls(this.camera, this.renderer.domElement);

    // Listen to window resize events
    window.addEventListener("resize", this.onResize);

    this.animate();
  }

  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);
    const deltaTime = clock.getDelta();
    this.box.update();
    this.player.update(deltaTime);
    this.renderer.render(this.scene, this.camera);
  };

  private onResize = (): void => {
    const { clientWidth, clientHeight } = this.container;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(clientWidth, clientHeight);
  };

  public dispose(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener("resize", this.onResize);
    this.renderer.dispose();

    // Remove the renderer's DOM element from the container
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }

    // Clear the singleton instance (To to allow re-creation)
    ThreeScene.instance = undefined as unknown as ThreeScene;
  }
}
