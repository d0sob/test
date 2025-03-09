import { PointerLockControls as OriginalPointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import * as THREE from "three";
import * as Rapier from "@dimforge/rapier3d-compat";

export class FirstPersonControls extends OriginalPointerLockControls {
  private velocity = new THREE.Vector3();
  private isMovingForward = false;
  private isMovingBackward = false;
  private isMovingLeft = false;
  private isMovingRight = false;
  private canJump = false;

  private boostMultiplier = 1.0;
  private readonly speed = 200;
  private readonly jumpStrength = 5;

  constructor(
    private camera: THREE.PerspectiveCamera,
    domElement: HTMLElement,
    private physicsBody: Rapier.RigidBody // Pass physics body to control it
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

  public update(): void {
    if (!this.physicsBody) return;

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

    // Apply movement velocity to physics body
    const currentVelocity = this.physicsBody.linvel();
    this.physicsBody.setLinvel(
      new Rapier.Vector3(
        moveDirection.x * speed,
        currentVelocity.y,
        moveDirection.z * speed
      ),
      true
    );

    console.log("MoveDirection:", moveDirection); // Debug movement
    console.log("Velocity Set:", this.physicsBody.linvel()); // Check if physics body is updating

    // Handle landing
    if (this.camera.position.y < 1.0) {
      this.velocity.y = 0;
      this.camera.position.y = 1.0;
      this.canJump = true;
      console.log("Landed, can jump now!"); // Debug jump logic
    }
  }
}
