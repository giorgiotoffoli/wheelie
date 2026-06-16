'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center } from '@react-three/drei'
import { Suspense } from 'react'
import HospitalModel from './hopsital-model'

export default function HospitalViewer() {
  return (
    <div className="w-full h-[170px] rounded-2xl relative bottom-1 left-1.5">
      <Canvas
        camera={{
          position: [0, 0, 130],
          fov: 50,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
        style={{
          background: 'transparent',
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 5, 5]} intensity={2} />

        <Suspense fallback={null}>
          <Center>
            <HospitalModel />
          </Center>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.75}
        />
      </Canvas>
    </div>
  )
}
