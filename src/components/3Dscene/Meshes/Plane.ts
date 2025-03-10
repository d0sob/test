import * as THREE from "three";
import * as Rapier from "@dimforge/rapier3d-compat";

export class Plane {
  private mesh: THREE.Mesh;
  private size: number;
  private physicsBody: Rapier.RigidBody;

  constructor(scene: THREE.Scene, physicsWorld: Rapier.World) {
    this.size = 100;
    const geometry = new THREE.PlaneGeometry(this.size, this.size);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffff00,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.x = Math.PI / 2;
    scene.add(this.mesh);

    const rigidBodyDesc = Rapier.RigidBodyDesc.fixed().setTranslation(0, 0, 0);
    this.physicsBody = physicsWorld.createRigidBody(rigidBodyDesc);

    const halfWidth = this.size * 0.5;
    const halfDepth = this.size * 0.5;
    const halfThickness = 0.1; // a small thickness
    const colliderDesc = Rapier.ColliderDesc.cuboid(
      halfWidth,
      halfThickness,
      halfDepth
    );
    physicsWorld.createCollider(colliderDesc, this.physicsBody);
  }
}
