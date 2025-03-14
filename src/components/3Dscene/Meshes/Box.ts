import * as THREE from "three";
import * as Rapier from "@dimforge/rapier3d-compat";

export class InstancedBoxes {
  private mesh: THREE.InstancedMesh;
  private physicsBodies: Rapier.RigidBody[] = [];
  private count: number; // Store count properly

  constructor(scene: THREE.Scene, physicsWorld: Rapier.World, count = 10) {
    this.count = count; // Store the count value
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshToonMaterial({
      color: 0x00ff00,
      emissiveIntensity: 1,
      emissive: 0x00ff00,
    });

    // Create an InstancedMesh with `count` instances
    this.mesh = new THREE.InstancedMesh(geometry, material, count);
    scene.add(this.mesh);

    const colSize = 0.5;

    for (let i = 0; i < count; i++) {
      // Randomize initial positions
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 5 + 3;
      const z = Math.random() * 10 - 5;

      // Create a physics body
      const rigidBodyDesc = Rapier.RigidBodyDesc.dynamic().setTranslation(
        x,
        y,
        z
      );
      const rigidBody = physicsWorld.createRigidBody(rigidBodyDesc);
      this.physicsBodies.push(rigidBody);

      // Create a collider for the box
      const colliderDesc = Rapier.ColliderDesc.cuboid(
        colSize,
        colSize,
        colSize
      );
      physicsWorld.createCollider(colliderDesc, rigidBody);

      // Set initial transformation for the instance
      const matrix = new THREE.Matrix4();
      matrix.setPosition(x, y, z);
      this.mesh.setMatrixAt(i, matrix);
    }

    this.mesh.instanceMatrix.needsUpdate = true;
  }

  public update(): void {
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();

    for (let i = 0; i < this.count; i++) {
      const body = this.physicsBodies[i];
      const pos = body.translation();
      const rot = body.rotation();

      position.set(pos.x, pos.y, pos.z);
      quaternion.set(rot.x, rot.y, rot.z, rot.w);

      matrix.compose(position, quaternion, new THREE.Vector3(1, 1, 1));
      this.mesh.setMatrixAt(i, matrix);
    }

    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
