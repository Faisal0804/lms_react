import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import {Button, Card, Col, Row} from "react-bootstrap";
import Php from "../../assets/images/courses/course1.png"
import Photo from "../../assets/images/courses/course2.png"
import Js from "../../assets/images/courses/course3.png"
import Python from "../../assets/images/courses/course4.png"
import CCCNA from "../../assets/images/courses/course5.png"
import Node from "../../assets/images/courses/course6.png"







const TopCourses = () => {
  return (
    <Fragment>
            <Container className="text-center mt-5">
                    <h1 className="serviceMainTitle">TOP COURSES</h1>
                    <hr className="hr"></hr>
                    <Row>
                        <Col sm={12} md={6} lg={4} >

                            <Card style={{height:'32rem'}} className="CourseCard mb-2">
                                <Card.Img  className="CourseImg" variant="top" src={Php} />
                                <Card.Body>
                                    <Card.Title className="CourseTitle">Become A Php Master</Card.Title>

                                    <a className="CourseLink">Enroll</a>
                                </Card.Body>
                            </Card>


                        </Col >
                        <Col sm={12} md={6} lg={4} >

                                <Card style={{height:'32rem'}} className="CourseCard mb-2">
                                    <Card.Img className="CourseImg" variant="top" src={Photo} />
                                    <Card.Body>
                                        <Card.Title className="CourseTitle">The Art Of Black And White Photography</Card.Title>

                                        <a className="CourseLink">More Details</a>
                                    </Card.Body>
                                </Card>


                        </Col >

                        <Col sm={12} md={6} lg={4} >

                                <Card style={{height:'32rem'}} className="CourseCard mb-2">
                                    <Card.Img className="CourseImg" variant="top" src={Python} />
                                    <Card.Body>
                                        <Card.Title className="CourseCardTitle">
                                            Learn Python Interactive Python Tutorial
                                      </Card.Title>

                                        <a className="CourseLink">More Details</a>
                                    </Card.Body>
                                </Card>

                        </Col >

                        
                        <Col sm={12} md={6} lg={4} >

                                <Card style={{height:'32rem'}} className="CourseCard mb-2">
                                    <Card.Img className="CourseImg" variant="top" src={CCCNA} />
                                    <Card.Body>
                                        <Card.Title className="CourseCardTitle">Become A Pthon Developer</Card.Title>

                                  
                                            <a className="CourseLink">More Details</a>
                                    </Card.Body>
                                </Card>

                        </Col >

                        
                        <Col sm={12} md={6} lg={4} >

                                <Card style={{height:'32rem'}} className="CourseCard mb-2">
                                    <Card.Img className="CourseImg" variant="top" src={Node} />
                                    <Card.Body>
                                        <Card.Title className="CourseCardTitle">From Zero To Hero With Advance Nodejs</Card.Title>

                                            <a className="CourseLink">More Details</a>
                                
                                     </Card.Body>
                                </Card>

                        </Col >
                        
                        <Col sm={12} md={6} lg={4} >

                                <Card style={{height:'32rem'}} className="CourseCard mb-2">
                                    <Card.Img className="CourseImg" variant="top" src={Js} />
                                    <Card.Body>
                                        <Card.Title className="CourseCardTitle">From Zero To Hero With Advance js</Card.Title>

                                            <a className="CourseLink">More Details</a>
                                    </Card.Body>
                                </Card>

                        </Col >




                    </Row>


            </Container>        
        
    </Fragment>
  )
}

export default TopCourses