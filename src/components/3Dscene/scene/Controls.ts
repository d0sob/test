// src/components/Controls.ts
import { OrbitControls as OriginalOrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PointerLockControls as OriginalPointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import * as THREE from "three";

export class Controls extends OriginalOrbitControls {
  constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    super(camera, domElement);
    this.enableDamping = true;
    this.dampingFactor = 0.05;
    this.minDistance = 2;
    this.maxDistance = 10;
    this.enablePan = false;
  }
}
export class FirstPersonControls extends OriginalPointerLockControls {
  constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    super(camera, domElement);
    domElement.addEventListener("click", () => this.lock());
  }
}
