import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Cake(props) {
  const { scroll } = props
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.y += 0.0003
    mesh.current.position.y = scroll.current * 10 - 0.5
  })

  const { nodes, materials } = useGLTF("/carrot_cake/carrot_cake_4k.gltf")
  return (
    <group {...props} dispose={null} ref={mesh}>
      <mesh
        geometry={nodes.carrot_cake.geometry}
        material={materials.carrot_cake}
      />
    </group>
  )
}

useGLTF.preload("/carrot_cake/carrot_cake_4k.gltf")
