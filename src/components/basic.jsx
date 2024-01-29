import React from 'react'
import "../assets/custom.css";
import "../index.css";
import styles from "../styles.module.css";

const style = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "100%",
    },
    inputText: {
      padding: "10px",
      color: "red",
    },
  };

function basic() {
  return (
    <div>
        <h1 style={{color:"red"}}>hello world</h1>
        <div className="main" style={style.main}>
        <input type="text" style={style.inputText}></input>
       </div>

       <h1 className={styles.heading}>Hello World</h1>
       <p className='main'>hello </p>
       <h4 className="text">i have nothing to say</h4>
    </div>
  )
}

export default basic