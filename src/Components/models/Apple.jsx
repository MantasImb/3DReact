import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Apple(props) {
  const { scroll } = props
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.y += 0.002
    mesh.current.position.y = scroll.current * 10 - 6.3
  })
  const { nodes, materials } = useGLTF("/apple/food_apple_01_4k.gltf")
  return (
    <group {...props} dispose={null} ref={mesh}>
      <mesh
        geometry={nodes.food_apple_01.geometry}
        material={materials.food_apple_01}
      />
    </group>
  )
}

useGLTF.preload("/apple/food_apple_01_4k.gltf")
