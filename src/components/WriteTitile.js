import React, { useEffect, useState } from 'react'
function WriteTitle() {
const [number,setnumber]=useState("");

   const yazdir=(e)=>{
    setnumber(e.target.value)
   }
   useEffect(()=>{
   document.title=number;
   console.clear()
   console.log(number);
   },[number])

  return (
    <div  style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <input placeholder='sayfa başlığını belirle' style={{fontSize:"20px"}} type='text' onChange={yazdir}></input>
    </div>
  )
}

export default WriteTitle