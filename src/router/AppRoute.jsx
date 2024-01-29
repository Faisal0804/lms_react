import React, { Component, Fragment } from 'react'
import {  Route,Routes} from 'react-router-dom';
import FormPage from '../pages/FormPage';

function AppRoute() {
  return (
    <Fragment>
        <Routes>


         <Route exact path="/" element={<FormPage/>}/>


   

     </Routes>
    </Fragment>
  )
}

export default AppRoute