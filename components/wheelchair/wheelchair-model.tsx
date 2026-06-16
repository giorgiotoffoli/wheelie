'use client'

import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

export default function WheelchairModel() {
  const obj = useLoader(OBJLoader, '/models/wheelchair.obj')

  return (
    <primitive
      object={obj}
      scale={0.7}
      rotation={[-Math.PI / 2, 0, 1]}
      position={[0, -45, 0]}
    />
  )
}
