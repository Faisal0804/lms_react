import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

function HookSetState() {
    const [name,setName]=useState({
        country:"Bangladesh"
    })
   
    const onChange=()=>{
        setName({
            country:"Canada"
        })
    }

  return (
    <div>
        <h1>{name.country}</h1>
        <Button variant='primary' onClick={onChange}>change</Button>

    </div>
  )
}

export default HookSetState