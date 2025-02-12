import * as Rapier from "@dimforge/rapier3d-compat";
import * as THREE from "three";

export async function setupPhysics(): Promise<{ physicsWorld: Rapier.World }> {
  await Rapier.init();
  const gravity = new THREE.Vector3(0, -9.8, 0);
  const physicsWorld = new Rapier.World(gravity);

  return { physicsWorld };
}
