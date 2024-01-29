import React from 'react'
import { Button } from 'react-bootstrap'
import { createRoot} from 'react-dom/client';

function Render() {
      const creat=() =>{

        var container = document.getElementById('root');
        var element=<h1>faisal</h1>
        var root = createRoot(element,container);
        root.render(<App />);

    }
   
    

  return (
    <div>
      <h1 id="root" >hello world</h1>
      <Button onClick={() => creat}>clicke Me</Button>
    </div>
  )
}

export default Render