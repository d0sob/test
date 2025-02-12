import * as THREE from "three";

export class Plane {
  private mesh: THREE.Mesh;
  private size: number;

  constructor(scene: THREE.Scene) {
    const geometry = new THREE.PlaneGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.x = Math.PI / 2;
    this.size = 10;
    this.mesh.scale.set(this.size, this.size, this.size);
    scene.add(this.mesh);
  }
}
