import React from 'react'

import { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import { motion } from "framer-motion"



const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 1.3,
      yoyo: Infinity
    }
  }
}


function TopFixedBanner() {

  return (
    <Fragment >

         
         <Container fluid={true}  className="topFixedBanner p-0">
        
            <div className="topBannerOverlay">
                <Container
                 
                
                className="topContent">
                    <Row>
                        <Col className="text-center">
                           <motion.h1
                           initial={{ opacity:0,x: '-100vw' }}
                           
                            animate={{ opacity: 5,x: 0 ,fontSize: 50, color: '#ff2994'}}
                            transition={{ delay: .2, duration: 2.5 }}
                           
                           className="topTitle">
                            
                            Explore Intersts And Career With Courses
                            </motion.h1>
                           <motion.h4 
                            whileHover={{ scale: 1.1, originX: 0, color: '#f8e112' }}
                           
                           className="topSubTitle">Every act of conscious learning requires the willingness to suffer aninjury to ones self-esteem.</motion.h4>
                         <div className="btn"><motion.button 
                               //animate={{ scale: 1.5 }}
                               variants={buttonVariants}
                               whileHover="hover"

                          variant="info" size="lg">Service Request</motion.button></div>
                        </Col>
                    </Row>
                </Container>

            </div>
         
         </Container>
        
    </Fragment>
  )
}

export default TopFixedBanner