import * as THREE from "three";
import * as Rapier from "@dimforge/rapier3d-compat";

export class Box {
  private mesh: THREE.Mesh;
  private physicsBody: Rapier.RigidBody;

  constructor(scene: THREE.Scene, physicsWorld: Rapier.World) {
    // Create a Three.js box mesh
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(0, 5, 0);
    scene.add(this.mesh);

    // Create the physics body
    const rigidBodyDesc = Rapier.RigidBodyDesc.dynamic().setTranslation(
      this.mesh.position.x,
      this.mesh.position.y,
      this.mesh.position.z
    );
    this.physicsBody = physicsWorld.createRigidBody(rigidBodyDesc);

    // Create a collider for the box
    const colSize = 0.5;
    const colliderDesc = Rapier.ColliderDesc.cuboid(colSize, colSize, colSize);
    physicsWorld.createCollider(colliderDesc, this.physicsBody);
  }

  public update(): void {
    // Simply update the mesh based on the physics simulation.
    const position = this.physicsBody.translation();
    this.mesh.position.set(position.x, position.y, position.z);
    const rotation = this.physicsBody.rotation();
    this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  }
}
