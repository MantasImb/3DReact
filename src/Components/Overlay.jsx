import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    className="scroll"
  >
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <h1>3D Designer</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        laboriosam sapiente dolor, eum aspernatur dolores esse qui laudantium
        dolore animi. Rerum provident non magnam sunt architecto. Tempore,
        nobis. Hic tenetur excepturi unde repellendus, magnam placeat enim
        consequuntur odit itaque sequi! Aspernatur laboriosam porro provident!
        Dolores alias quisquam commodi a veniam!
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Carrot Cake</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est nam
        aut placeat aspernatur suscipit?
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Apple</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        expedita voluptatibus laborum hic maiores sit modi sunt corrupti numquam
        fuga.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Croissant</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque veniam,
        obcaecati corporis ducimus, est voluptatum facere delectus minus
        pariatur voluptatem dolorum error ad possimus cumque tempora rem
        voluptatibus atque fuga.
      </div>
    </div>
    <span className="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default Overlay
