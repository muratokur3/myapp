import React, { useState } from 'react'

 

function MetniTersCevir() {

    const [metin, setMetin]=useState('');

    const [tesrMetin, setTersMetin]=useState('');

    const getMetin=(e)=>{

        setMetin(e.target.value)

    }

    const tersCevir=()=>{

 

        setTersMetin(metin.split('').reverse().join('').toUpperCase())

    }

  return (

    <div  style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

        <input placeholder='Ters çevrilecek metin' type='text' onChange={getMetin}></input>

        <button onClick={tersCevir}>Ters Çevir</button>

        <h1>{tesrMetin}</h1>

    </div>

  )

}

 

export default MetniTersCevir