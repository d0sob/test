// src/components/3Dscene/scene/setupPhysics.ts
import * as Rapier from "@dimforge/rapier3d";
import * as THREE from "three";

export function setupPhysics(): { physicsWorld: Rapier.World } {
  const gravity = new THREE.Vector3(0, -9.8, 0);
  const physicsWorld = new Rapier.World(gravity);

  return { physicsWorld };
}
