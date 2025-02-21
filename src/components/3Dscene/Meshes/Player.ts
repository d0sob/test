import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as Rapier from "@dimforge/rapier3d-compat";
import { FirstPersonControls } from "../scene/Controls.ts";

export class Player {
  private mixer!: THREE.AnimationMixer;
  private model!: THREE.Object3D;
  private animations: { [key: string]: THREE.AnimationClip } = {};
  private physicsBody: Rapier.RigidBody;
  private controls: FirstPersonControls;
  private loaded = true;

  constructor(scene: THREE.Scene, physicsWorld: Rapier.World, camera: THREE.PerspectiveCamera,domElement: HTMLElement) {
    const loader = new GLTFLoader();

    loader.load(
      "./assets/models/stickman.glb",
      (gltf) => {
        this.model = gltf.scene;
        this.model.position.set(2,2,2)
        scene.add(this.model);
        // Set up the mixer for animations
        this.mixer = new THREE.AnimationMixer(this.model);

        // Store animations in a map for easy access
        gltf.animations.forEach((clip) => {
          this.animations[clip.name] = clip;
          this.mixer.clipAction(clip).play();
        });


    const rigidBodyDesc = Rapier.RigidBodyDesc.dynamic().setTranslation(
      this.model.position.x,
      this.model.position.y,
      this.model.position.z
    );
    this.physicsBody = physicsWorld.createRigidBody(rigidBodyDesc);

    // Create a collider for the box
    const colSize = 0.5;
    const colliderDesc = Rapier.ColliderDesc.capsule(0.2,0.3)
    physicsWorld.createCollider(colliderDesc, this.physicsBody);

    this.controls = new FirstPersonControls(camera,domElement);

    camera.position.set(0,1.6,0);
    this.model.add(camera);
    this.loaded = true

    console.log("Player loaded succesfully!")

    
      },
      undefined,
      (err) => {
        console.error(err);
      }
    );
  }

  update(deltaTime: number) {
    if (this.mixer) {
      this.mixer.update(deltaTime);
    }

    if (!this.loaded || !this.physicsBody) return;

  this.controls.update(deltaTime);

    // Simply update the mesh based on the physics simulation.
    const position = this.physicsBody.translation();
    this.model.position.set(position.x, position.y, position.z);
    const rotation = this.physicsBody.rotation();
    this.model.rotation.set(rotation.x, rotation.y, rotation.z);
  }

  switchAnimation(animationName: string) {
    if (this.mixer && this.animations[animationName]) {
      this.mixer.stopAllAction();
      const animationClip = this.animations[animationName];
      const action = this.mixer.clipAction(animationClip);
      action.play();
    }
  }

  getPosition(): THREE.Vector3 {
    if (!this.model) {
      return new THREE.Vector3();
    }
    return this.model.position;
  }

  move(direction: THREE.Vector3) {
    if (this.model) {
      this.model.position.add(direction);
    }
  }
}
