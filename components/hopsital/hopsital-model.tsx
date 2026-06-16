'use client'

import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

export default function HospitalModel() {
  const obj = useLoader(OBJLoader, '/models/hospital.obj')

  return (
    <primitive
      object={obj}
      scale={12}
      rotation={[0, -10, 0]}
      position={[0, 15, 0]}
    />
  )
}
