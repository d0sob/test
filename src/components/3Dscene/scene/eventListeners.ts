import { ThreeScene } from "./index";

export function setupEventListeners(sceneInstance: ThreeScene): void {
  window.addEventListener("keydown", (event) => {
    if (event.key === "1") {
      sceneInstance.player.switchAnimation("Idle");
    } else if (event.key === "2") {
      sceneInstance.player.switchAnimation("Run");
    }
  });

  window.addEventListener("resize", () => onResize(sceneInstance));
}

function onResize(sceneInstance: ThreeScene): void {
  const { container, camera, renderer } = sceneInstance;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}
