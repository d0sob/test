import * as THREE from "three";
import * as Rapier from "@dimforge/rapier3d-compat";

export class ThirdPersonControls {
  private sensitivity = 0.002;
  private angleX = 0;
  private angleY = 0;
  private readonly minY = -Math.PI / 4;
  private readonly maxY = Math.PI / 4;
  private isPointerLocked = false;

  private isMovingForward = false;
  private isMovingBackward = false;
  private isMovingLeft = false;
  private isMovingRight = false;
  private boostMultiplier = 1.0;
  private readonly speed = 10;
  private readonly jumpStrength = 10;
  private canJump = false;

  constructor(
    private camera: THREE.PerspectiveCamera,
    private player: THREE.Object3D,
    private physicsBody: Rapier.RigidBody,
    private domElement: HTMLElement
  ) {
    // Listen for pointer lock activation
    domElement.addEventListener("click", this.requestPointerLock);
    document.addEventListener("pointerlockchange", this.onPointerLockChange);
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
  }

  private requestPointerLock = (): void => {
    this.domElement.requestPointerLock();
  };

  private onPointerLockChange = (): void => {
    this.isPointerLocked = document.pointerLockElement === this.domElement;
  };

  private onMouseMove = (event: MouseEvent): void => {
    if (!this.isPointerLocked) return; // Ignore if not locked

    this.angleX -= event.movementX * this.sensitivity;
    this.angleY += event.movementY * this.sensitivity;
    this.angleY = Math.max(this.minY, Math.min(this.maxY, this.angleY));
  };

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
          const currentVelocity = this.physicsBody.linvel();
          this.physicsBody.setLinvel(
            new Rapier.Vector3(
              currentVelocity.x,
              this.jumpStrength,
              currentVelocity.z
            ),
            true
          );
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
    const moveDirection = new THREE.Vector3();
    const forward = new THREE.Vector3();
    const right = new THREE.Vector3();

    // forward.set(Math.sin(this.angleX), 0, -Math.cos(this.angleX)).normalize();
    this.camera.getWorldDirection(forward);
    forward.y = 0; // Ignore vertical component
    forward.normalize();

    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    if (this.isMovingForward) moveDirection.add(forward);
    if (this.isMovingBackward) moveDirection.sub(forward);
    if (this.isMovingRight) moveDirection.add(right);
    if (this.isMovingLeft) moveDirection.sub(right);

    moveDirection.normalize();

    const speed = this.speed * this.boostMultiplier;
    const currentVelocity = this.physicsBody.linvel();

    this.physicsBody.setLinvel(
      new Rapier.Vector3(
        moveDirection.x * speed,
        currentVelocity.y,
        moveDirection.z * speed
      ),
      true
    );

    const radius = 3;
    const offsetX = Math.sin(this.angleX) * Math.cos(this.angleY) * radius;
    const offsetZ = Math.cos(this.angleX) * Math.cos(this.angleY) * radius;
    const offsetY = Math.sin(this.angleY) * radius * 0.5;

    const playerPosition = this.player.position;
    this.camera.position.set(
      playerPosition.x + offsetX,
      playerPosition.y + 1.5 + offsetY,
      playerPosition.z + offsetZ
    );

    this.camera.lookAt(
      playerPosition.x,
      playerPosition.y + 1.5,
      playerPosition.z
    );

    if (moveDirection.length() > 0) {
      const targetRotation = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1), // Default forward vector
        moveDirection.clone().normalize() // New movement direction
      );

      this.player.quaternion.slerp(targetRotation, 0.1); // Adjust 0.1 for smoothness
    }

    if (this.physicsBody.translation().y <= 1.01) {
      this.canJump = true;
    }
  }
}
