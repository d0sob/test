// src/components/Skybox.ts
import * as THREE from "three";

export class Skybox {
  constructor(scene: THREE.Scene) {
    const textureLoader = new THREE.CubeTextureLoader();
    const textureCube = textureLoader.load([
      "assets/skybox/px.jpg",
      "assets/skybox/nx.jpg",
      "assets/skybox/py.jpg",
      "assets/skybox/ny.jpg",
      "assets/skybox/pz.jpg",
      "assets/skybox/nz.jpg",
    ]);
    scene.background = textureCube;
  }
}
