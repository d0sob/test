import * as THREE from "three";
import { ThreeScene } from "./index";

const clock = new THREE.Clock();

export function animate(sceneInstance: ThreeScene): void {
  sceneInstance.animationFrameId = requestAnimationFrame(() =>
    animate(sceneInstance)
  );
  const deltaTime = clock.getDelta();
  sceneInstance.box.update();
  sceneInstance.player.update(deltaTime);
  sceneInstance.renderer.render(sceneInstance.scene, sceneInstance.camera);
}
