import * as THREE from "three";

export class Box {
  private mesh: THREE.Mesh;

  constructor(scene: THREE.Scene) {
    const geometry = new THREE.BoxGeometry(24, 24, 24);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    scene.add(this.mesh);
  }

  public update = (): void => {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  };
}
