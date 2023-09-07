import Header from "./Components/Header"
import Footer from "./Components/Footer"
import MainCanvas from "./Components/MainCanvas"
import Overlay from "./Components/Overlay"
import { useState, useRef } from "react"

function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  return (
    <>
      <Header scroll={scroll} />
      <MainCanvas className="canvas" scroll={scroll} overlay={overlay} />
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
      <Footer />
    </>
  )
}

export default App
