
import React, { Fragment, useState, useEffect} from 'react'
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { motion } from "framer-motion"

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { 
    rotate: 0,
    transition: { duration : 1 }
  },
}


const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
    }
  }
};



const TopNavigation = () => {
  const [scrollPosition, setScrollPosition] = useState(
    {
      navBarTitle:"navTitle",
      navBarItem:'navItem',
      navBarBack:"navBackground"

   }
  );

  const onScroll = () => {
    if(window.scrollY>100){
      setScrollPosition({navBarTitle:'navTitleScroll', navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
    }else if(window.scrollY<100){
      setScrollPosition({navBarTitle:'navTitle',navBarBack:'navBackground',navBarItem:'navItem'})
  }
    }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  },[])
   

    
  return (
  <Fragment>
    <Navbar className={scrollPosition.navBarBack} fixed="top"  expand="lg" >
    <Container>
    
        <Navbar.Brand 

          
        className={scrollPosition.navBarTitle} href="#home">

     
     <motion.svg
       drag
       dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
       dragElastic={0.9}      
      variants={svgVariants}
      initial="hidden"
       animate="visible"
       xmlns="http://www.w3.org/TR/SVG."
       width="48"
       height="48"
       viewBox="0 0 100 100">

         <motion.path
            fill="white"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
           <motion.path
            fill="white"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />

     </motion.svg>
     
        
          
          <motion.span
        initial={{ position: 'relative', top: -250}}
        animate={{ top: 0 }}
        transition={{ delay: 0.5,duration:0.5, type: 'tween' }}
        >EduCavo</motion.span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" navBarMain me-auto">
         

            <Nav.Link className={scrollPosition.navBarItem}>
            Home</Nav.Link>
            <Nav.Link className={scrollPosition.navBarItem}>About</Nav.Link>
            <Nav.Link className={scrollPosition.navBarItem}>Courses</Nav.Link>
            <Nav.Link className={scrollPosition.navBarItem}>Contact</Nav.Link>
            <Nav.Link className={scrollPosition.navBarItem}>Tuitorial</Nav.Link>
            <Nav.Link className={scrollPosition.navBarItem}>Blog</Nav.Link>
            <Nav.Link className={scrollPosition.navBarItem}>Contact</Nav.Link> 
                           
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
</Fragment>
  )
}

export default TopNavigation