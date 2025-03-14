import * as THREE from "three";
import * as Rapier from "@dimforge/rapier3d-compat";

export class Plane {
  private mesh: THREE.Mesh;
  private size: number;
  private physicsBody: Rapier.RigidBody;
  private shaderMaterial: THREE.ShaderMaterial;

  constructor(scene: THREE.Scene, physicsWorld: Rapier.World) {
    this.size = 100;
    const geometry = new THREE.PlaneGeometry(this.size, this.size, 200, 200); // More subdivisions for smooth waves

    // Define ShaderMaterial
    this.shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
        uColor1: { value: new THREE.Color(0x3a7bd5) }, // Deep water
        uColor2: { value: new THREE.Color(0x00d2ff) }, // Shallow water
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform float uTime;
        
        // Simple hash-based pseudo-random function
        float random(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vUv = uv;

          // Wave motion (sine-based)
          float wave1 = sin(position.x * 0.2 + uTime * 1.2) * 0.3;
          float wave2 = sin(position.y * 0.3 + uTime * 1.5) * 0.25;
          float wave3 = sin((position.x + position.y) * 0.15 + uTime * 1.8) * 0.2;

          // Random noise for natural variation
          float noiseEffect = (random(position.xy * 0.3 + uTime * 0.5) - 0.5) * 0.2;

          // Combine all effects
          vElevation = wave1 + wave2 + wave3 + noiseEffect;

          vec3 displacedPosition = position;
          displacedPosition.z += vElevation; // Offset in z-axis (wave height)
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
          // Smooth color gradient (deep to shallow)
          float mixStrength = smoothstep(0.0, 1.0, vUv.y);
          vec3 color = mix(uColor1, uColor2, mixStrength);

          // Wave-based shading (bright crests, dark troughs)
          float brightness = 0.8 + vElevation * 0.3;
          color *= brightness;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geometry, this.shaderMaterial);
    this.mesh.rotation.x = -Math.PI / 2; // Keep it flat
    scene.add(this.mesh);

    // Physics (Static rigid body for collisions)
    const rigidBodyDesc = Rapier.RigidBodyDesc.fixed().setTranslation(0, 0, 0);
    this.physicsBody = physicsWorld.createRigidBody(rigidBodyDesc);

    const halfWidth = this.size * 0.5;
    const halfDepth = this.size * 0.5;
    const halfThickness = 0.1;
    const colliderDesc = Rapier.ColliderDesc.cuboid(
      halfWidth,
      halfThickness,
      halfDepth
    );
    physicsWorld.createCollider(colliderDesc, this.physicsBody);
  }

  // Update shader uniforms (for animation)
  update(deltaTime: number) {
    this.shaderMaterial.uniforms.uTime.value += deltaTime;
  }
}
