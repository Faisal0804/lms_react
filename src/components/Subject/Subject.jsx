import React, {useEffect, Fragment } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Col, Container, Row } from 'react-bootstrap';
import Ge from '../../assets/images/Subject/subject1.png'
import Cs from '../../assets/images/Subject/subject2.png'
import Ce from '../../assets/images/Subject/subject3.png'
import Ai from '../../assets/images/Subject/subject4.png'
import Bs from '../../assets/images/Subject/subject5.png'
import Wb from '../../assets/images/Subject/subject6.png'


const squareVariants = {
    visible: { opacity: 1, x: 0
        , transition: { duration: 1 ,duration:.8} },
    hidden: { opacity: 0, x: -1000}
    };

const Subject = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();


    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);


  return (

    
    <Fragment>
         <Container className="text-center mt-5" >
                    <motion.h1 className="serviceMainTitle"
                       ref={ref}
                       animate={controls}
                       initial="hidden"
                       variants={squareVariants}
                    
                    
                    >Our Suject Categories</motion.h1>
                    <hr className="hr"
                    
                      
                    
                    ></hr>
        
                    <Row
             
                    >
                        <Col lg={4} md={6} sm={12} className="mt-0">
                            <motion.div className="serviceCard text-center"
                                
                                viewport={{once:false}}
                                initial={{opacity:0,x:-50}}
                                whileInView={{opacity:1,x:0}}
                                transition={{type:'easeIn',
                                  duration:1,
                                  delay:.7
                            }}  
                              
                            >
                                <img className="serviceImg" src={Ge}/>
                                <h2 className="serviceName">General Education</h2>
                                <p className="serviceDescription ">Today companies need to be constantly reevaluating their business and systems looking for enhancements and cost benefts. Our expertise in custom software Development can ease out of any business and can build a more convenient environment of business growth</p>

                            </motion.div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <motion.div 
                            className="serviceCard text-center"
                            viewport={{once:false}}
                            initial={{opacity:0,x:-50}}
                            whileInView={{opacity:1,x:0}}
                            transition={{type:'easeIn',
                              duration:1,
                              delay:.7
                        }}

                            
                            >

                                <img className="serviceImg" src={Cs}/>
                                <h2 className="serviceName">Computer Science</h2>
                                <p className="serviceDescription">Websites have been a specialty of our team for over 5 years. We have developed over many sites since we have been offering these services. We are able to deliver gorgeous custom websites at a very convenient price.</p>

                            </motion.div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <motion.div
                            
                            className="serviceCard text-center"
                             
                            viewport={{once:false}}
                            initial={{opacity:0,x:-50}}
                            whileInView={{opacity:1,x:0}}
                            transition={{type:'easeIn',
                              duration:1,
                              delay:.7
                        }}  
                          
                            
                            >
                                <img className="serviceImg" src={Ce}/>
                                <h2 className="serviceName">Civil Engineering</h2>
                                <p className="serviceDescription">We build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>


                            </motion.div>

                        </Col>


                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceImg" src={Ai}/>
                                <h2 className="serviceName">Artificial Intelligence</h2>
                                <p className="serviceDescription">Branding is important because not only is it what makes a memorable impression on consumers but it allows your customers and clients to know what to expect from your company. Our expert team can design the brand for you..</p>


                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center " >
                                <img className="serviceImg" src={Bs}/>
                                <h2 className="serviceName">Business Studies</h2>
                                <p className="serviceDescription">Now a days, most popular marketing method is Online marketing. It is extremely impactful for marketing your product within your budget. We provide the best deal of Online marketing..</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceImg" src={Wb}/>
                                <h2 className="serviceName">Web Developmentss</h2>
                                <p  className="serviceDescription"> We provide most secure and smooth hosting service for professionals.</p>
                            </div>
                        </Col>


                    </Row>


                </Container>
    </Fragment>
  )
}

export default Subject