'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center } from '@react-three/drei'
import { Suspense } from 'react'
import WheelchairModel from './wheelchair-model'

interface WheelchairViewerProps {
  isWheelchairPage: boolean
}

export default function WheelchairViewer({
  isWheelchairPage,
}: WheelchairViewerProps) {
  return (
    <div className="w-full h-[130px] rounded-2xl relative bottom-1 left-1.5">
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
          enablePan={!isWheelchairPage}
          minPolarAngle={isWheelchairPage ? Math.PI / 2.5 : Math.PI / 2.5}
          maxPolarAngle={isWheelchairPage ? Math.PI / 2.5 : Math.PI / 2.5}
          minAzimuthAngle={isWheelchairPage ? Math.PI / 1.75 : -Math.PI}
          maxAzimuthAngle={isWheelchairPage ? Math.PI / 1.75 : Math.PI}
        />
      </Canvas>
    </div>
  )
}
