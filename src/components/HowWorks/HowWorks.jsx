import React, { Fragment } from 'react'
import { Container,Row,Col,Card,Button} from 'react-bootstrap'
import { Player, BigPlayButton, ControlBar, ReplayControl,ForwardControl,VolumeMenuButton,View} from 'video-react';
import 'video-react/dist/video-react.css';
import about from "../../assets/images/about-us.jpg"



const HowWorks = () => {
  return (
   <Fragment>
        
        <Container   className="text-center mt-5 ">

            <h1 className="serviceMainTitle">How We Works</h1>
            <hr className="hr"></hr>
            <Container className="works">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Card className="WorkCard" style={{ width: '100%', }}>
                       
                        <Card.Body>
                            <Card.Title>Join LMS Community</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <a className="WorkLink">More Details</a>
                        </Card.Body>
                        </Card>

                    </Col>

                    <Col lg={6} md={6} sm={12}>
                  
                        <Player 
                          
                           
                           poster={about}
                           src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                          <BigPlayButton 
                            
                            position="center" />

                            <ControlBar  autoHide={false}>
                               
                                <ReplayControl seconds={30} order={2.3} />
                                <ForwardControl seconds={30} order={3.3} />
                               
                            </ControlBar>
                        </Player>
                       

                    </Col>
                </Row>
            </Container>

        </Container>
   </Fragment>
  )
}

export default HowWorks