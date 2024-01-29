import React,{Fragment, useState} from 'react'
import { Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import SliderOne from '../../assets/images/banner.jpg'



const TopSliderBanner = () => {

  

  return (
    <Fragment>
    <Container fluid={true}  className=" p-0">
    
  
    <Carousel  variant='light'  >
      <Carousel.Item className='topSilderBanner'  >
        <img
         className="d-block w-100 "
          src={ SliderOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 >First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='topSilderBanner' > 
        <img
          className="d-block w-100 "
          src={ SliderOne}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='topSilderBanner' >
        <img
          className="d-block w-100 "
          src={ SliderOne}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
</Fragment>
  )
}

export default TopSliderBanner 
