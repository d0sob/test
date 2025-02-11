// src/components/Controls.ts
import { OrbitControls as OriginalOrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

export class Controls extends OriginalOrbitControls {
  constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    super(camera, domElement);
    this.enableDamping = true;
    this.dampingFactor = 0.2;
  }
}
