import React, { Fragment, useEffect, useState } from 'react'
import { Container,Row,Col,Card,Button} from 'react-bootstrap'
import AnimatedText from 'react-animated-text-content';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Php from "../../assets/images/courses/course1.png"
import Python from "../../assets/images/courses/course2.png"
import Js from "../../assets/images/courses/course3.png"
import CCNA from "../../assets/images/courses/course4.png"
import Node from "../../assets/images/courses/course5.png"
import Photography from "../../assets/images/courses/course6.png"






const Courses = () => {

   const styles = {
      bounce: {
        // color:"red",
        animation: 'x 1s',
        //animationName: Radium.keyframes(bounce, 'bounce')
      }
    };


   
  return (
     <Fragment>
        <Container className="text-center mt-5">
                    <h1 className="">
                    <AnimatedText
                    type="chars"
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1,
                        autoplay:'true',
                        ease: 'ease-in-out',
                    }}
                    animationType="wave"
                    interval={0.4}
                    duration={1}
                    tag="h1"
                    className="serviceMainTitle"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                  >           
                     
                     TOP COURSES
                     </AnimatedText>
                     </h1>
              
                  <div >
                     
                    
                  <hr style={styles.bounce} className="hr" />
                
                  </div>
                     
                 
                
                     
                    
                   

                    <Container>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                          
                              <Card className="CourseCard "style={{ width: '20rem' }}>
                                <Card.Img className="CoursetImg" variant="top" src={Php} />
                                 <Card.Body>
                                    <Card.Title className="CourseCardTitle">Become a php develeloper</Card.Title>
                                    
                                    <a className="CourseLink">Enroll</a> 
                                 </Card.Body>
                                </Card>
                               
                           </Col>

                           <Col lg={4} md={6} sm={12}>
                              <Card className="CourseCard "style={{ width: '20rem' }}>
                                <Card.Img className="CoursetImg" variant="top" src={Node} />
                                 <Card.Body>
                                    <Card.Title className="CourseCardTitle">Become a php develeloper</Card.Title>

                                    <a className="CourseLink">Enroll</a>
                                 </Card.Body>
                                </Card>
                           </Col>

                           <Col lg={4} md={6} sm={12}>
                              <Card className="CourseCard" style={{ width: '20rem' }}>
                                <Card.Img className="CoursetImg" variant="top" src={Python} />
                                 <Card.Body>
                                    <Card.Title className="CourseCardTitle">Become a php develeloper</Card.Title>
                                    
                                    <a className="CourseLink">Enroll</a>
                                 </Card.Body>
                                </Card>
                           </Col>

                           <Col lg={4} md={6} sm={12}>
                              <Card className="CourseCard" style={{ width: '20rem' }}>
                                <Card.Img className="CoursetImg" variant="top" src={Js} />
                                 <Card.Body>
                                    <Card.Title className="CourseCardTitle">Become a php develeloper</Card.Title>

                                    <a className="CourseLink">Enroll</a>
                                 </Card.Body>
                                </Card>
                           </Col>

                           <Col lg={4} md={6} sm={12}>
                              <Card className="CourseCard "style={{ width: '20rem' }}>
                                <Card.Img className="CoursetImg" variant="top" src={CCNA} />
                                 <Card.Body>
                                    <Card.Title className="CourseCardTitle">Become a php develeloper</Card.Title>
                                    
                                    <a className="CourseLink">Enroll</a>
                                 </Card.Body>
                                </Card>
                           </Col>

                           <Col lg={4} md={6} sm={12}>
                              <Card className="CourseCard"style={{ width: '20rem' }}>
                                <Card.Img className="CoursetImg" variant="top" src={Photography} />
                                 <Card.Body>
                                    <Card.Title className="CourseCardTitle">Become a php develeloper</Card.Title>
                                    
                                    <a className="CourseLink">Enroll</a>
                                 </Card.Body>
                                </Card>
                           </Col>
                        </Row>
                    </Container>
        </Container>
     </Fragment>
  )
}

export default Courses