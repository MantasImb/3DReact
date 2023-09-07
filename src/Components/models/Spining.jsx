import React, { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial, Box } from "@react-three/drei"

const SpinningMesh = (props) => {
  //ref to target the mesh
  const mesh = useRef()

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    // <a.mesh
    //   position={position}
    //   ref={mesh}
    //   onClick={() => setExpand(!expand)}
    //   scale={props.scale}
    //   castShadow
    // >
    //   <boxBufferGeometry attach="geometry" args={args} />
    //   <MeshWobbleMaterial
    //     color={color}
    //     speed={speed}
    //     attach="material"
    //     factor={0.6}
    //   />
    // </a.mesh>
    //Using Drei box if you want
    <Box {...props} ref={mesh} castShadow>
      <MeshWobbleMaterial {...props} attach="material" factor={0.6} Speed={1} />
    </Box>
  )
}

export default SpinningMesh
