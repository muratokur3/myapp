import React, { useState } from 'react'

function Count() {
    const [count,setCount]=useState(0);
    const counter=(
    )=>{
      setCount(count+1)
    }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>{count}</h1>
      <button onClick={counter}>Arttir</button>
    </div>
  )
}

export default Count