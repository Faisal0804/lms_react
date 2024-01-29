import React, { Fragment,useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import about from "../../assets/images/about-us.jpg"
import { motion,AnimatePresence } from "framer-motion"


const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: '100vw' ,
      transition: {
        staggerChildren: 0.4,
       
      } 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'tween',
        staggerChildren: 0.7,
        dealy:0.5,
        duration:0.5,
        when: "beforeChildren",
      }
    },
  };


  const nextVariants = {
    hidden: { 
        x: '100vw' ,
       
       opacity: 0, 
    },
   visible: {
      x: 0,
      opacity: 1,
       transition:{
        dealy:0.5,
          duration:0.7,
        },
           
     
    } 
  }


  const buttonVariants = {
    //visible: {
      // x: [0, -20, 20, -20, 20, 0],
      // transition: { delay: 2 }
    // },

     hover: {
      //scale: [1, 1.3, 1, 1.3, 1, 1.5],
      scale: 1.5,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "5px 5px 8px rgb(255,255,255)",
      transition: {
       // duration: 2.5
       duration: 3.3,
        yoyo: Infinity
      }
    }
    
  }
  
function About() {

  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  },4000 )



  return (
    <Fragment>

        <motion.Container fluid={true} className="aboutContent p-3"
           variants={containerVariants}
           initial="hidden"
           animate="visible"
         
        
        >
           
            <Row className="ms-2">
                <Col lg={6} md={6} sm={12} >
                <AnimatePresence>

                {showTitle && (
                   <motion.p className="AboutName "

                   exit={{y: -1000 }}
                   
                   >ABOUT US</motion.p>
                   )}
                </AnimatePresence>
                   <h4 className="AboutSubName ">The End Result Of All True Learning</h4>
                   <p className="AboutDescription ">The key to success is to appreciate how people learn, understand the thought process that goes into instructional design, what works well</p>
                   <motion.a className="aboutLink"

                    variants={buttonVariants}
                  //  animate="visible"
                    whiileHover="hover"

                   
                   
                   >More Details</motion.a>
                </Col>
                
                <Col lg={6} md={6} sm={12}>
                    <motion.div className="aboutImage"
                        variants={nextVariants}
                       
                    
                    >
                        <img src={about}/>
                    </motion.div>
                            
                </Col>

            </Row>
            
        </motion.Container>
    </Fragment>
  )
}

export default About