import { useMemo, useRef } from 'react'
import type { ComponentRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import { Color, MathUtils, Vector3 } from 'three'
import type { Mesh } from 'three'

type Keyframe = {
  pos: [number, number, number]
  scale: number
  distort: number
  color: string
}

type SphereDef = {
  speed: number
  metalness: number
  roughness: number
  frames: Keyframe[]
}

// drei doesn't export the impl class publicly; pull the ref type from the
// component itself so we keep the 'distort' setter without restating it.
type DistortMaterial = ComponentRef<typeof MeshDistortMaterial>

// Scroll-progress stops aligned to (Hero, Awards, UseCases, Experts, Steps, Footer).
// Tuned by eyeballing roughly where each section centers in the page.
const stops = [0.0, 0.18, 0.45, 0.68, 0.85, 1.0] as const

const spheres: SphereDef[] = [
  // A — large violet lead. Lands on the "Award Winning" peach card,
  // the Ecommerce corner, the experts cluster, and the merged blob.
  {
    speed: 0.7,
    metalness: 0.6,
    roughness: 0.15,
    frames: [
      { pos: [-2.6, 0.4, 0], scale: 1.3, distort: 0.42, color: '#5328ff' },
      { pos: [-3.2, 1.4, 0], scale: 0.9, distort: 0.36, color: '#ff8b6b' },
      { pos: [-2.6, 1.6, 0], scale: 0.8, distort: 0.32, color: '#ff8b6b' },
      { pos: [-0.5, 0.4, 0], scale: 1.2, distort: 0.55, color: '#5328ff' },
      { pos: [-3.0, 0.0, 0], scale: 0.8, distort: 0.30, color: '#00f0ff' },
      { pos: [0.0, 0.0, 0], scale: 1.6, distort: 0.55, color: '#ff8b6b' },
    ],
  },
  // B — largest, deep navy / cyan / dark anchor. Footer pulls it to center.
  {
    speed: 0.5,
    metalness: 0.85,
    roughness: 0.05,
    frames: [
      { pos: [2.6, -0.4, -1], scale: 1.7, distort: 0.32, color: '#1a0a4a' },
      { pos: [0.0, 1.4, -0.5], scale: 0.95, distort: 0.30, color: '#00f0ff' },
      { pos: [2.6, 1.6, -0.5], scale: 0.8, distort: 0.30, color: '#00f0ff' },
      { pos: [0.5, 0.0, 0], scale: 1.5, distort: 0.50, color: '#0c0428' },
      { pos: [0.0, 0.0, 0], scale: 0.85, distort: 0.30, color: '#c3b3ff' },
      { pos: [0.0, 0.0, 0], scale: 1.5, distort: 0.55, color: '#5328ff' },
    ],
  },
  // C — cyan accent. Visits the "Scalable" violet card, the Creative
  // bottom-left, and pops gold in the footer.
  {
    speed: 1.1,
    metalness: 0.4,
    roughness: 0.2,
    frames: [
      { pos: [0.0, 1.4, -2.4], scale: 0.9, distort: 0.5, color: '#00f0ff' },
      { pos: [3.2, 1.4, 0], scale: 0.85, distort: 0.4, color: '#5328ff' },
      { pos: [-2.6, -1.6, 0], scale: 0.8, distort: 0.42, color: '#c3b3ff' },
      { pos: [-0.4, -0.4, 0.4], scale: 0.95, distort: 0.45, color: '#00f0ff' },
      { pos: [3.0, 0.0, 0], scale: 0.8, distort: 0.30, color: '#5328ff' },
      { pos: [0.0, 0.2, 0], scale: 1.4, distort: 0.5, color: '#ffd6a8' },
    ],
  },
  // D — small lavender drift. Mint at the Storytelling corner.
  {
    speed: 1.3,
    metalness: 0.5,
    roughness: 0.2,
    frames: [
      { pos: [-1.2, -1.6, 1], scale: 0.55, distort: 0.3, color: '#c3b3ff' },
      { pos: [-1.6, -2.5, 1.5], scale: 0.32, distort: 0.22, color: '#c3b3ff' },
      { pos: [2.6, -1.6, 0], scale: 0.8, distort: 0.42, color: '#4ee2c2' },
      { pos: [0.4, 0.4, -0.3], scale: 0.75, distort: 0.35, color: '#c3b3ff' },
      { pos: [0.0, 2.5, 1], scale: 0.22, distort: 0.2, color: '#ff8b6b' },
      { pos: [0.1, 0.0, 0], scale: 1.3, distort: 0.45, color: '#c3b3ff' },
    ],
  },
  // E — smallest peach. Mostly drifts; merges with the rest in the footer.
  {
    speed: 1.5,
    metalness: 0.5,
    roughness: 0.2,
    frames: [
      { pos: [3.4, 1.6, 0.4], scale: 0.4, distort: 0.25, color: '#ff8b6b' },
      { pos: [1.8, -2.8, 1.5], scale: 0.26, distort: 0.2, color: '#ffd6a8' },
      { pos: [0.0, 0.0, 0.8], scale: 0.32, distort: 0.3, color: '#ffd97a' },
      { pos: [0.0, 0.6, 0.6], scale: 0.55, distort: 0.32, color: '#ff8b6b' },
      { pos: [0.0, -2.5, 1], scale: 0.22, distort: 0.2, color: '#ffd6a8' },
      { pos: [-0.1, 0.0, 0], scale: 1.2, distort: 0.4, color: '#00f0ff' },
    ],
  },
]

function getScrollProgress(): number {
  const max = document.documentElement.scrollHeight - window.innerHeight
  if (max <= 0) return 0
  return MathUtils.clamp(window.scrollY / max, 0, 1)
}

function findSegment(progress: number): { index: number; t: number } {
  for (let i = 0; i < stops.length - 1; i++) {
    if (progress <= stops[i + 1]) {
      const segLen = stops[i + 1] - stops[i] || 1
      return { index: i, t: MathUtils.clamp((progress - stops[i]) / segLen, 0, 1) }
    }
  }
  return { index: stops.length - 2, t: 1 }
}

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function SphereChoreographer({ sphere }: { sphere: SphereDef }) {
  const meshRef = useRef<Mesh>(null)
  const matRef = useRef<DistortMaterial>(null)
  const firstFrameRef = useRef(true)

  // Reusable scratch objects (avoid per-frame allocs).
  const targetPos = useMemo(() => new Vector3(), [])
  const colorA = useMemo(() => new Color(), [])
  const colorB = useMemo(() => new Color(), [])

  useFrame((_, delta) => {
    const mesh = meshRef.current
    const mat = matRef.current
    if (!mesh) return

    const progress = reduceMotion ? 0 : getScrollProgress()
    const { index, t: rawT } = findSegment(progress)
    const t = MathUtils.smoothstep(rawT, 0, 1)
    const a = sphere.frames[index]
    const b = sphere.frames[index + 1] ?? a

    targetPos.set(
      MathUtils.lerp(a.pos[0], b.pos[0], t),
      MathUtils.lerp(a.pos[1], b.pos[1], t),
      MathUtils.lerp(a.pos[2], b.pos[2], t),
    )
    const targetScale = MathUtils.lerp(a.scale, b.scale, t)
    const targetDistort = MathUtils.lerp(a.distort, b.distort, t)
    colorA.set(a.color)
    colorB.set(b.color)
    colorA.lerp(colorB, t)

    // Snap on first frame so the scene is correct on reload at any scroll
    // position, then ease afterwards.
    const damp = firstFrameRef.current ? 1 : 1 - Math.exp(-delta * 4.5)
    firstFrameRef.current = false

    mesh.position.lerp(targetPos, damp)
    mesh.scale.setScalar(MathUtils.lerp(mesh.scale.x, targetScale, damp))
    mesh.rotation.x += delta * 0.08 * sphere.speed
    mesh.rotation.y += delta * 0.12 * sphere.speed

    if (mat) {
      mat.color.lerp(colorA, damp)
      mat.distort = MathUtils.lerp(mat.distort, targetDistort, damp)
    }
  })

  const initial = sphere.frames[0]
  return (
    <mesh ref={meshRef} position={initial.pos} scale={initial.scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        ref={matRef}
        color={initial.color}
        distort={initial.distort}
        speed={1.4}
        roughness={sphere.roughness}
        metalness={sphere.metalness}
      />
    </mesh>
  )
}

function BackgroundScene() {
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

      {spheres.map((s, idx) => (
        <SphereChoreographer key={idx} sphere={s} />
      ))}
    </Canvas>
  )
}

export default BackgroundScene
