import React, { Fragment ,useState} from 'react'
import { Card, Container,Row,Col,Button,Modal } from 'react-bootstrap'
import Php from "../../assets/images/courses/course1.png"
import Python from "../../assets/images/courses/course2.png"
import Js from "../../assets/images/courses/course3.png"
import CCNA from "../../assets/images/courses/course4.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons"
import { faFacebook,faYoutube,faThreads,faGithub} from '@fortawesome/free-brands-svg-icons' 
import { Player, BigPlayButton, ControlBar, ReplayControl,ForwardControl,VolumeMenuButton,View} from 'video-react';
import 'video-react/dist/video-react.css';
import about from "../../assets/images/about-us.jpg"
import { LazyMotion, domAnimation, m } from "framer-motion"

import Star from '../Star/star';






const CourseReview = ({ onChange }) => {

    const [show, setShow] = useState(false);
    const [rating, setRating] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);
  };




  return (

       
    <Fragment>

        <Container className="text-center mt-5 ">
            
            
            
          <LazyMotion  features={domAnimation}>
            <m.h1 className="serviceMainTitle">How We Works</m.h1>
            </LazyMotion>
            
               <hr className="hr"></hr>
            
      

            <Container>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <Card style={{ width: '16rem',height:'530' }}>
                          
                               <Card.Img className="CourseReviewImg" variant="top" src={Php} />
                                <p className="mt-2"><FontAwesomeIcon className="playBtn"  onClick={handleShow}  icon={faPlayCircle} /></p>
                                <p>
                                        <FontAwesomeIcon icon={faFacebook} animation="{}" />
                                        <FontAwesomeIcon icon={faYoutube} /> 
                                        <FontAwesomeIcon icon={faThreads} />  
                                        <FontAwesomeIcon icon={faGithub} />
                                </p>                           
                                    <Modal  show={show} onHide={handleClose} animation={false}>
            
                                        <Modal.Body>
                                        <Player                 
                                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                            <BigPlayButton position="center" />
                                            <ControlBar autoHide={false}>                               
                                                <ReplayControl seconds={30} order={2.3} />
                                                <ForwardControl seconds={30} order={3.3} />                        
                                            </ControlBar>
                                       </Player>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button   variant="info" onClick={handleClose}>
                                            Close
                                        </Button>                               
                                        </Modal.Footer>
                                    </Modal>



                                <Card.Body>
                                    <p  className="mt-1"   >Fisal Mohammed</p>
                                    <Card.Title className="text-justify">Mastering of Php</Card.Title>
                                    <Card.Text>
                                        <span>
                                        {[1, 2, 3, 4, 5].map((value) => (
                                          <Star
                                          key={value}
                                          filled={value <= rating}
                                           onClick={() => changeRating(value)}
                                            
                                          
                                          />
                                          ))} 
                                        </span>
                                        
                                   
                                    </Card.Text>
                                  
                                     
                                  


                                </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <Card style={{ width: '16rem',height:'530' }}>
                            <Card.Img className="CourseReviewImg" variant="top" src={Python}/>
                             <p  className="mt-2"><FontAwesomeIcon className="playBtn" onClick={handleShow}  icon={faPlayCircle} /></p>
                             <p>
                                        <FontAwesomeIcon icon={faFacebook} />
                                        <FontAwesomeIcon icon={faYoutube} /> 
                                        <FontAwesomeIcon icon={faThreads} />  
                                        <FontAwesomeIcon icon={faGithub} />
                            </p> 
                             <Modal size="lg"   show={show} onHide={handleClose} animation={false}>
                                      
                                      <Modal.Body>
                                      <Player                 
                                          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                          <BigPlayButton position="center" />
                                          <ControlBar autoHide={false}>                               
                                              <ReplayControl seconds={30} order={2.3} />
                                              <ForwardControl seconds={30} order={3.3} />                        
                                          </ControlBar>
                                     </Player>
                                      </Modal.Body>
                                      <Modal.Footer>
                                      <Button  variant="info" onClick={handleClose}>
                                          Close
                                      </Button>                               
                                      </Modal.Footer>
                                  </Modal>

                              <Card.Body>
                                  <p >Fisal Mohammed</p>
                                  <Card.Title className="text-justify">Mastering of Php</Card.Title>
                                  <Card.Text>
                                  <span>
                                        {[1, 2, 3, 4, 5].map((value) => (
                                          <Star
                                          key={value}
                                          filled={value <= rating}
                                           onClick={() => changeRating(value)}
                                            
                                          
                                          />
                                          ))} 
                                        </span>
                                 
                                  </Card.Text>

                                  
                                  
                              </Card.Body>                                
                                                           
                        </Card>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <Card style={{ width: '16rem',height:'530'}}>
                            <Card.Img className="CourseReviewImg" variant="top" src={Js} />
                            <p  className="mt-2"><FontAwesomeIcon className="playBtn" onClick={handleShow}  icon={faPlayCircle} /></p>
                            <p>
                                        <FontAwesomeIcon icon={faFacebook} />
                                        <FontAwesomeIcon icon={faYoutube} /> 
                                        <FontAwesomeIcon icon={faThreads} />  
                                        <FontAwesomeIcon icon={faGithub} />
                            </p> 
                            <Modal size="lg"   show={show} onHide={handleClose} animation={false}>
                                      
                                      <Modal.Body>
                                      <Player                 
                                          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                          <BigPlayButton position="center" />
                                          <ControlBar autoHide={false}>                               
                                              <ReplayControl seconds={30} order={2.3} />
                                              <ForwardControl seconds={30} order={3.3} />                        
                                          </ControlBar>
                                     </Player>
                                      </Modal.Body>
                                      <Modal.Footer>
                                      <Button  variant="info" onClick={handleClose}>
                                          Close
                                      </Button>                               
                                      </Modal.Footer>
                                  </Modal>

                              <Card.Body>
                                  <p  >Fisal Mohammed</p>
                                  <Card.Title className="text-justify">Mastering of Php</Card.Title>
                                  <Card.Text>

                                  <span>
                                        {[1, 2, 3, 4, 5].map((value) => (
                                          <Star
                                          key={value}
                                          filled={value <= rating}
                                           onClick={() => changeRating(value)}
                                            
                                          
                                          />
                                          ))} 
                                        </span>
                               
                                  </Card.Text>

                                  
                              </Card.Body>                                 
                                                             
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <Card style={{ width: '16rem',height:'530' }}>
                            <Card.Img className="CourseReviewImg" variant="top" src={CCNA} /> 
                            <p  className="mt-2"><FontAwesomeIcon className="playBtn" onClick={handleShow}  icon={faPlayCircle} /></p>
                            <p>
                                        <FontAwesomeIcon icon={faFacebook} />
                                        <FontAwesomeIcon icon={faYoutube} /> 
                                        <FontAwesomeIcon icon={faThreads} />  
                                        <FontAwesomeIcon icon={faGithub} />
                            </p> 
                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                            <Modal size="lg"  show={show} onHide={handleClose} animation={false}>
                                      
                                      <Modal.Body>
                                      <Player                 
                                          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                          <BigPlayButton position="center" />
                                          <ControlBar autoHide={false}>                               
                                              <ReplayControl seconds={30} order={2.3} />
                                              <ForwardControl seconds={30} order={3.3} />                        
                                          </ControlBar>
                                     </Player>
                                      </Modal.Body>
                                      <Modal.Footer>
                                      <Button  variant="info" onClick={handleClose}>
                                          Close
                                      </Button>                               
                                      </Modal.Footer>
                                  </Modal>

                              <Card.Body>
                                  <p >Fisal Mohammed</p>
                                  <Card.Title className="text-justify">Mastering of Php</Card.Title>
                                  <Card.Text>

                                  <span>
                                        {[1, 2, 3, 4, 5].map((value) => (
                                          <Star
                                          key={value}
                                          filled={value <= rating}
                                           onClick={() => changeRating(value)}
                                            
                                          
                                          />
                                          ))} 
                                        </span>
                                 
                                  </Card.Text>

                                  
                                  
                              </Card.Body>                                
                                                              
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    </Fragment>
  )
}

export default CourseReview