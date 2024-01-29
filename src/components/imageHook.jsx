import React,{useState} from 'react'
import Carbefore from "../assets/images/Carbefore.jpg"
import CarAfter from "../assets/images/CarAfter.jpg"


function imageHook() {
  const [imageSrc, setImageSrc] = useState(Carbefore);

  // Function to change the image source
  const changeImageSrc = () => {
    setImageSrc(CarAfter );
  }
    
  return (
    <div>
    <img src={imageSrc} alt="car" /><br></br>
    <button onClick={changeImageSrc}>Change Image</button>
  </div>
  );
}

export default imageHook