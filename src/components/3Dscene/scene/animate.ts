// src/components/3Dscene/scene/animate.ts

import * as THREE from "three";
import { ThreeScene } from "./index";

const clock = new THREE.Clock();

export function animate(sceneInstance: ThreeScene): void {
  sceneInstance.animationFrameId = requestAnimationFrame(() =>
    animate(sceneInstance)
  );
  const deltaTime = clock.getDelta();

  if (sceneInstance.physicsWorld) {
    sceneInstance.physicsWorld.step();
  }

  const updatables = [
    sceneInstance.box,
    sceneInstance.player,
    sceneInstance.capsule,
    sceneInstance.controls,
  ];

  updatables.forEach((obj) => obj?.update?.(deltaTime));

  sceneInstance.composer.render();
}
