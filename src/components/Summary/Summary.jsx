import React, { Fragment } from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import StdImg from "../../assets/images/about-us1.png"
import Course from "../../assets/images/about-us2.png"
import Teacher from "../../assets/images/about-us3.png"
import Success from "../../assets/images/about-us2.png"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Summary() {
  return (
    <Fragment>
        
        <Container fluid={true} className="summaryBanner summarySection p-0 ">
            
            <div className="summaryOverlay">
                <Container className="text-center mt-5">
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <Card className="mainCard ml-1" style={{ width: '16rem' }}>
                                <Card.Img  className="cardImage" variant="top" src={StdImg} />
                                <Card.Body>
                                    <Card.Title>
                                    <p className="cardNo">
                                    <CountUp  start={0} end={2000}>
                                        {({ countUpRef, start }) => (
                                           <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                             
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>

                                    +</p>
                                    </Card.Title>
                                    <Card.Title>Students</Card.Title>
                               
                              
                              </Card.Body>
                            </Card>
                           
                        </Col>

                        <Col  sm={12} md={6} lg={3}>
                        <Card className="mainCard" style={{ width: '16rem' }}>
                            <Card.Img className="cardImage"  variant="top" src={Course} />
                            <Card.Body>
                                <Card.Title>
                                <p className="cardNo">
                                <CountUp start={0} end={20}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                             
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>

                                +</p>
                                </Card.Title>
                                <Card.Title>courses</Card.Title>
                               
                              
                            </Card.Body>
                         </Card>
                           
                        </Col>


                        <Col  sm={12} md={6} lg={3}>

                         <Card className="mainCard" style={{ width: '16rem' }}>
                            <Card.Img  className="cardImage" variant="top" src={Teacher} />
                            <Card.Body>
                                <Card.Title>
                                <p className="cardNo">
                                <CountUp start={0} end={25}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                             
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>

                                +
                                </p>
                                </Card.Title>
                                <Card.Title>Teachers</Card.Title>
                               
                              
                            </Card.Body>
                            </Card>
                        </Col>
                      

                        <Col  sm={12} md={6} lg={3}>
                        <Card className="mainCard" style={{ width: '16rem' }}>
                            <Card.Img  className="cardImage" variant="top" src={Success} />
                            <Card.Body>
                                <Card.Title>
                                <p className="cardNo">
                                <CountUp start={0} end={95}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                             
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                +</p></Card.Title>
                                <Card.Title>Success</Card.Title>
                                                           
                            </Card.Body>
                        </Card>
                           
                        </Col>
                    </Row>

                </Container>
                

            </div>


        </Container>

    </Fragment>
  )
}

export default Summary