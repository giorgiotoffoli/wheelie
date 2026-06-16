'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center } from '@react-three/drei'
import { Suspense } from 'react'
import WheelchairModel from './wheelchair-model'

export default function WheelchairViewer() {
  return (
    <div className="w-full h-[130px] rounded-2xl">
      <Canvas
        camera={{
          position: [0, 0, 170],
          fov: 35,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
        style={{
          background: 'transparent',
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 5, 5]} intensity={2.5} />

        <Suspense fallback={null}>
          <Center>
            <WheelchairModel />
          </Center>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={true}
          // Allows only up/down tilt
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  )
}
