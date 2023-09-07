import React from "react"

export default function Footer() {
  return (
    <div className="absolute bottom-0 z-50 w-full flex justify-around bg-main/[0.8] px-5 py-1 text-tertiary items-center m-1">
      <p className="font-space-mono m-[0.5] text-sm">
        @2022 All rights reserved
      </p>
      <p className="font-space-mono m-[0.5] text-sm">Annunziata Fortuna</p>
      <p className="font-space-mono m-[0.5] text-sm">
        contact@annunziatafortuna.com
      </p>
    </div>
  )
}
