import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Croissant(props) {
  const { scroll } = props
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.y += 0.002
    mesh.current.position.y = scroll.current * 10 - 11
  })
  const { nodes, materials } = useGLTF("/croissant/croissant.gltf")
  return (
    <group {...props} dispose={null} ref={mesh}>
      <mesh
        geometry={nodes.croissant.geometry}
        material={materials.croissant}
      />
    </group>
  )
}

useGLTF.preload("/croissant/croissant.gltf")
