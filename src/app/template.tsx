"use client";
/*
    Similar to a layout in that layouts are shared between children,
    but state is not kept between children, reloaded
*/
import React, { Children } from 'react'
import { useState } from 'react';

export default function Template({ children }: {children: React.ReactNode}) {
  const [input, setImput] = useState("")
  return (
    <div>
      {children}
      <input value={input} onChange={e => setImput(e.target.value)} />
      <p>Template</p>
    </div>
  )
}

