import * as THREE from "three";
import * as Rapier from "@dimforge/rapier3d-compat";

export class Capsule {
  private mesh: THREE.Mesh;
  private physicsBody: Rapier.RigidBody;

  constructor(scene: THREE.Scene, physicsWorld: Rapier.World) {
    const geometry = new THREE.CapsuleGeometry(0.3, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(0, 100, 0);
    scene.add(this.mesh);

    //Create the physics body
    const rigidBodyDesc = Rapier.RigidBodyDesc.dynamic().setTranslation(
      this.mesh.position.x,
      this.mesh.position.y,
      this.mesh.position.z
    );
    this.physicsBody = physicsWorld.createRigidBody(rigidBodyDesc);

    // Create a collider for the box
    const colliderDesc = Rapier.ColliderDesc.capsule(1, 1);
    physicsWorld.createCollider(colliderDesc, this.physicsBody);
  }

  public update(): void {
    const position = this.physicsBody.translation();
    this.mesh.position.set(position.x, position.y, position.z);
    const rotation = this.physicsBody.rotation();
    this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  }
}
