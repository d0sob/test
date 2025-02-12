import { PointerLockControls as OriginalPointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import * as THREE from "three";

export class FirstPersonControls extends OriginalPointerLockControls {
  private velocity = new THREE.Vector3();
  private isMovingForward = false;
  private isMovingBackward = false;
  private isMovingLeft = false;
  private isMovingRight = false;
  private canJump = false;

  private boostMultiplier = 1.0;
  private readonly speed = 5;
  private readonly jumpStrength = 5;
  private readonly gravity = 9.8;

  constructor(
    private camera: THREE.PerspectiveCamera,
    domElement: HTMLElement
  ) {
    super(camera, domElement);
    domElement.addEventListener("click", () => this.lock());
    this.addEventListeners();
  }

  private addEventListeners(): void {
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
  }

  private onKeyDown = (event: KeyboardEvent): void => {
    switch (event.code) {
      case "KeyW":
        this.isMovingForward = true;
        break;
      case "KeyS":
        this.isMovingBackward = true;
        break;
      case "KeyA":
        this.isMovingLeft = true;
        break;
      case "KeyD":
        this.isMovingRight = true;
        break;
      case "Space":
        if (this.canJump) {
          this.velocity.y = this.jumpStrength;
          this.canJump = false;
        }
        break;
      case "ShiftLeft":
        this.boostMultiplier = 2.0;
        break;
    }
  };

  private onKeyUp = (event: KeyboardEvent): void => {
    switch (event.code) {
      case "KeyW":
        this.isMovingForward = false;
        break;
      case "KeyS":
        this.isMovingBackward = false;
        break;
      case "KeyA":
        this.isMovingLeft = false;
        break;
      case "KeyD":
        this.isMovingRight = false;
        break;
      case "ShiftLeft":
        this.boostMultiplier = 1.0;
        break;
    }
  };

  public update(deltaTime: number): void {
    const moveDirection = new THREE.Vector3();
    const forward = new THREE.Vector3();
    const right = new THREE.Vector3();

    // Get camera's forward direction (ignoring Y to stay on ground)
    this.camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    // Get camera's right direction (perpendicular to forward)
    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    // Calculate movement direction
    if (this.isMovingForward) moveDirection.add(forward);
    if (this.isMovingBackward) moveDirection.sub(forward);
    if (this.isMovingRight) moveDirection.add(right);
    if (this.isMovingLeft) moveDirection.sub(right);

    moveDirection.normalize(); // Prevent faster diagonal movement

    const speed = this.speed * this.boostMultiplier;

    // Apply velocity
    this.velocity.x = moveDirection.x * speed;
    this.velocity.z = moveDirection.z * speed;
    this.velocity.y -= this.gravity * deltaTime; // Apply gravity

    // Move camera
    this.camera.position.addScaledVector(this.velocity, deltaTime);

    // Handle landing
    if (this.camera.position.y < 1.0) {
      this.velocity.y = 0;
      this.camera.position.y = 1.0;
      this.canJump = true;
    }
  }
}
