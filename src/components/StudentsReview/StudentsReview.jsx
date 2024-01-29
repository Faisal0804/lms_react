import React, { Fragment } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import Neep from "../../assets/images/student/neep.jpg"
import Samiha from "../../assets/images/student/samiha.jpg"
import  Sanjida from "../../assets/images/student/sanjida.jpg"
import Mehzabeen from "../../assets/images/student/mehzabeen.jpeg"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#18A1C1" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#18A1C1" }}
      onClick={onClick}
    />
  );
}

const settings= {
  autoplaySpeed:500,
  autoplay:true,
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              initialSlide: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};


const StudentsReview = () => {

  return (
     <Fragment>

        <Container   className="text-center mt-5 ">

            <h1 className="serviceMainTitle">What Our Students Say</h1>
            <hr className="hr"></hr>
           
            <Slider {...settings}>
              
              <div className="studentSection">

                <img className="circleImg " src={Neep}/>

                <h1 className="studentName">Nader Nihal Neep</h1>
                <h4 className="studentTitle">Web Developer</h4>
                <p className="studentDescription" >"Our group is working with this team for more than 2 years now. They are undoubtedly talented and we are more than happy to work with them."</p>
              </div>


              <div className="studentSection">
                <img className="circleImg" src={Samiha}/>
                <h1 className="studentName">Samiha Ispak Choudhury</h1>
                <h4 className="studentTitle">Web Developer</h4>
                <p className="studentDescription">"Infinity Flame Software compnay knows what they are doing and they proved to us several times."</p>
              </div>


              <div className="studentSection">
                <img className="circleImg" src={Sanjida}/>
                <h1 className="studentName">Sanjida Sabiha</h1>
                <h4 className="studentTitle">Web Developer</h4>
                <p className="studentDescription">"They are humble, generous, passionate, dedicated, creative and talented."</p>
              </div>

              <div className="studentSection">
                <img className="circleImg" src={Mehzabeen}/>
                <h1 className="studentName">Mehzabeen Chowdhury</h1>
                <h4 className="studentTitle">Web Developer</h4>
                <p className="studentDescription">"Infinity Flame Software compnay knows what they are doing and they proved to us several times."</p>
              </div>                
                           
                           
            </Slider>
         

        </Container>

     </Fragment>
  )
}

export default StudentsReview