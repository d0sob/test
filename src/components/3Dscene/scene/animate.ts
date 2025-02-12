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
  if (sceneInstance.box) {
    sceneInstance.box.update();
  }
  sceneInstance.player.update(deltaTime);

  if (sceneInstance.capsule) {
    sceneInstance.capsule.update();
  }

  if (sceneInstance.controls) {
    sceneInstance.controls.update(deltaTime);
  }

  sceneInstance.renderer.render(sceneInstance.scene, sceneInstance.camera);
}
