import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'

type SphereProps = {
  position: [number, number, number]
  scale: number
  color: string
  speed?: number
  distort?: number
  roughness?: number
  metalness?: number
}

function FloatingSphere({
  position,
  scale,
  color,
  speed = 1,
  distort = 0.35,
  roughness = 0.15,
  metalness = 0.6,
}: SphereProps) {
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.4}
          roughness={roughness}
          metalness={metalness}
        />
      </mesh>
    </Float>
  )
}

function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false,
      }}
      onCreated={({ gl }) => {
        // Suppress benign "Context Lost" warning that fires when React
        // (esp. StrictMode in dev) remounts the canvas. Letting the
        // browser's default handler run logs a noisy error; preventing
        // default lets WebGL restore cleanly when the canvas remounts.
        gl.domElement.addEventListener(
          'webglcontextlost',
          (event) => {
            event.preventDefault()
          },
          false,
        )
      }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-6, -2, -4]} intensity={2.6} color="#5328ff" />
      <pointLight position={[6, 3, -2]} intensity={1.6} color="#00f0ff" />
      <pointLight position={[0, -4, 4]} intensity={1.2} color="#ff8b6b" />

      <FloatingSphere
        position={[-2.6, 0.4, 0]}
        scale={1.3}
        color="#5328ff"
        speed={0.7}
        distort={0.42}
      />
      <FloatingSphere
        position={[2.6, -0.4, -1]}
        scale={1.7}
        color="#1a0a4a"
        speed={0.5}
        distort={0.32}
        metalness={0.85}
        roughness={0.05}
      />
      <FloatingSphere
        position={[0, 1.4, -2.4]}
        scale={0.9}
        color="#00f0ff"
        speed={1.1}
        distort={0.5}
        metalness={0.4}
      />
      <FloatingSphere
        position={[-1.2, -1.6, 1]}
        scale={0.55}
        color="#c3b3ff"
        speed={1.3}
        distort={0.3}
      />
      <FloatingSphere
        position={[3.4, 1.6, 0.4]}
        scale={0.4}
        color="#ff8b6b"
        speed={1.5}
        distort={0.25}
      />
    </Canvas>
  )
}

export default HeroScene
