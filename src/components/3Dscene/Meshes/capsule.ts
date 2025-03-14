import * as THREE from "three";
import * as Rapier from "@dimforge/rapier3d-compat";

export class Capsule {
  private mesh: THREE.Mesh;
  private physicsBody: Rapier.RigidBody;
  private material: THREE.ShaderMaterial;
  private startTime: number;

  constructor(scene: THREE.Scene, physicsWorld: Rapier.World) {
    this.startTime = performance.now() * 0.001; // Time for shader animation

    const geometry = new THREE.CapsuleGeometry(0.3, 1);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec3 vNormal;

        void main() {
          // Pulsating intensity
          float intensity = 0.5 + 0.5 * sin(time * 2.0);

          // Fake glow effect using normal direction
          float edgeGlow = pow(1.0 - abs(dot(vNormal, vec3(0.0, 1.0, 0.0))), 3.0);
          edgeGlow *= intensity;

          vec3 finalColor = mix(color, vec3(0.0, 0.5, 1.0), edgeGlow);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.position.set(0, 100, 0);
    scene.add(this.mesh);

    // Create the physics body
    const rigidBodyDesc = Rapier.RigidBodyDesc.dynamic().setTranslation(
      this.mesh.position.x,
      this.mesh.position.y,
      this.mesh.position.z
    );
    this.physicsBody = physicsWorld.createRigidBody(rigidBodyDesc);

    // Create a collider
    const colliderDesc = Rapier.ColliderDesc.capsule(1, 1);
    physicsWorld.createCollider(colliderDesc, this.physicsBody);
  }

  public update(): void {
    const position = this.physicsBody.translation();
    this.mesh.position.set(position.x, position.y, position.z);
    const rotation = this.physicsBody.rotation();
    this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);

    // Update shader animation
    this.material.uniforms.time.value =
      performance.now() * 0.001 - this.startTime;
  }
}
