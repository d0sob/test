import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as Rapier from "@dimforge/rapier3d-compat";
import { ThirdPersonControls } from "../scene/Controls.ts";

export class Player {
  private mixer!: THREE.AnimationMixer;
  private model!: THREE.Object3D;
  private animations: { [key: string]: THREE.AnimationClip } = {};
  private physicsBody!: Rapier.RigidBody;
  public controls!: ThirdPersonControls;
  private loaded = false; // Start with false, set true when loaded
  public currentAnimation = "Idle";

  constructor(
    private scene: THREE.Scene,
    private physicsWorld: Rapier.World,
    private camera: THREE.PerspectiveCamera,
    private domElement: HTMLElement
  ) {
    this.loadModel();
  }

  private loadModel() {
    const loader = new GLTFLoader();
    loader.load(
      "./assets/models/stickman.glb",
      (gltf) => {
        this.model = gltf.scene;
        this.model.position.set(2, 2, 2);
        this.scene.add(this.model);

        // Set up animations
        this.mixer = new THREE.AnimationMixer(this.model);
        gltf.animations.forEach((clip) => {
          this.animations[clip.name] = clip;
          this.mixer.clipAction(clip).play();
        });

        // Setup physics body
        const rigidBodyDesc = Rapier.RigidBodyDesc.dynamic()
          .setTranslation(
            this.model.position.x,
            this.model.position.y,
            this.model.position.z
          )
          .lockRotations();
        this.physicsBody = this.physicsWorld.createRigidBody(rigidBodyDesc);

        // Create capsule collider
        const colliderDesc = Rapier.ColliderDesc.capsule(0.2, 0.3);
        this.physicsWorld.createCollider(colliderDesc, this.physicsBody);

        // Setup player controls
        this.controls = new ThirdPersonControls(
          this.camera,
          this.model,
          this.physicsBody,
          this.domElement
        );

        // Set initial camera position
        this.camera.position.set(0, 1.5, -3);
        this.loaded = true;

        console.log("Player loaded successfully!");
      },
      undefined,
      (err) => console.error("Error loading player model:", err)
    );
  }

  public update(deltaTime: number) {
    if (!this.loaded || !this.physicsBody) return;

    // Update animations
    if (this.mixer) this.mixer.update(deltaTime);

    // Get physics position
    const position = this.physicsBody.translation();
    this.model.position.set(position.x, position.y, position.z);

    // Update third-person camera position
    this.controls.update();
  }

  public switchAnimation(animationName: string) {
    if (this.mixer && this.animations[animationName]) {
      this.mixer.stopAllAction();
      const action = this.mixer.clipAction(this.animations[animationName]);
      action.play();
    }
  }

  public getPosition(): THREE.Vector3 {
    return this.model ? this.model.position.clone() : new THREE.Vector3();
  }
}
