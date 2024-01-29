import { Fragment, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import TopFixedBanner from './components/TopFixedBanner/TopFixedBanner';
import About from './components/About/About';
import TopSlider from './components/TopSlider/TopSlider';
import Summary from './components/Summary/Summary';
import TopNavBar from './components/TopNavBar/TopNavBar';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Subject from './components/Subject/Subject';
import Analysis from './components/Analysis/Analysis';
import StudentsReview from './components/StudentsReview/StudentsReview';
import TopCourses from './components/TopCourses/TopCourses';
import Courses from './components/Courses/Courses';
import HowWorks from './components/HowWorks/HowWorks';
import CourseReview from './components/CourseReview/CourseReview';
import Star from './components/Star/star';
import Contact from './components/Contact/Contact';
import SideBar from './components/SideBar/SideBar';
import TopSliderBanner from './components/TopSliderBanner/TopSliderBanner';
import Loading from './components/Loading/Loading';
import DataFatch from './components/DataFatch/DataFatch';




function App() {
  const [text, setText] = useState("");

 
  return (
    <div >
       <SideBar/>
       
      <TopFixedBanner/>
      <Contact/>
      <Analysis/>
     

      
      
   

      
    </div>
  )
}

export default App
