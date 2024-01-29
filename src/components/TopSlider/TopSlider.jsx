import React, { Fragment } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import about from "../../assets/images/about-us.jpg"

function TopSlider() {
   
       
  return (
   
    <Fragment>
        <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url(about) no-repeat center center` }}
                   >
                        <div className="center">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                    </div>
                ))}
        </Slider>

    </Fragment>
  )
}

export default TopSlider