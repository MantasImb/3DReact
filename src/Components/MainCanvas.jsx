import React, { useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

import Loader from "./Loader"

import Box from "./models/Box"
import Cake from "./models/Cake"
import SpinningMesh from "./models/Spining"
import Apple from "./models/Apple"
import Croissant from "./models/Croissant"

import { Stars, SpotLight } from "@react-three/drei"

export default function MainCanvas(props) {
  const { overlay, scroll } = props
  return (
    <Canvas
      onCreated={(state) => state.events.connect(overlay.current)}
      raycaster={{
        computeOffsets: ({ clientX, clientY }) => ({
          offsetX: clientX,
          offsetY: clientY,
        }),
      }}
    >
      <color attach="background" args={["#100720"]} />
      <ambientLight intensity={0.5} />
      <Stars />
      <SpotLight position={[0, 1, 10]} angle={0.2} distance={15} />
      <Suspense fallback={<Loader />}>
        <Cake
          position={[0, -1, 0]}
          scale={15}
          rotation={[0.7, 0, 0]}
          scroll={scroll}
        />
        <Apple
          position={[0, -7.3, 0]}
          scale={15}
          rotation={[0.4, 0, 0]}
          scroll={scroll}
        />
        <Croissant
          position={[0, -14.6, 0]}
          scale={15}
          rotation={[0.4, 0, 0]}
          scroll={scroll}
        />
        {/* <SpinningMesh
        position={[4, 0, 0]}
        color="lightblue"
        args={[3, 2, 1]}
        speed={2}
      /> */}
      </Suspense>
    </Canvas>
  )
}
