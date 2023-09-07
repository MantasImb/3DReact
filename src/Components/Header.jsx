import React, { useState, useEffect } from "react"

export default function Header(props) {
  const { scroll } = props
  const [openPage, setOpenPage] = useState("Home")
  const focusedClasses = "text-tertiary underline font-space-mono m-2 text-lg"
  const classes = "text-secondary font-space-mono m-2 text-lg"

  useEffect(() => {
    console.log("potato")
    if (scroll < 44) {
      setOpenPage("Home")
    } else if (scroll > 44) {
      setOpenPage("Work")
    }
  }, [scroll])

  return (
    <div className="absolute z-50 w-full flex justify-between bg-main/[0.8] px-5 py-1 rounded-b-lg border-b border-tertiary">
      <div>
        <h1 className="font-montez text-secondary m-2 text-3xl">
          Annunziata Fortuna
        </h1>
      </div>
      <div className="flex text-secondary justify-center items-center m-1">
        <p className={openPage === "Home" ? focusedClasses : classes}>Home</p>
        <p className={openPage === "Work" ? focusedClasses : classes}>Work</p>
        <p className={openPage === "About" ? focusedClasses : classes}>About</p>
        <p className={openPage === "Contact" ? focusedClasses : classes}>
          Contact
        </p>
      </div>
    </div>
  )
}
