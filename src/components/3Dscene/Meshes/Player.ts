import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export class Player {
  private mixer!: THREE.AnimationMixer;
  private model!: THREE.Object3D;
  private animations: { [key: string]: THREE.AnimationClip } = {};

  constructor(scene: THREE.Scene) {
    const loader = new GLTFLoader();

    loader.load(
      "./assets/models/stickman.glb",
      (gltf) => {
        this.model = gltf.scene;
        scene.add(this.model);

        // Set up the mixer for animations
        this.mixer = new THREE.AnimationMixer(this.model);

        // Store animations in a map for easy access
        gltf.animations.forEach((clip) => {
          this.animations[clip.name] = clip;
          this.mixer.clipAction(clip).play();
        });
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
