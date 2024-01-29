import React from 'react'

function button() {
    function doThis(hello){
        alert(hello);
    }
  return (
    <div>
        <button onClick={doThis.bind(this,"hello honululu")}>click me</button>
    </div>
  )
}

export default button