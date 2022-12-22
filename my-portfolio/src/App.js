// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { connect } from 'react-redux'
import Frontend_index from './frontend/Frontend_index';
import Backend_index from './backend/Backend_index'
import Class_assessment from './backend/Components/Class_assessment.js'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';



function App(props) {
  // if (props.store.overall.frontend){
  //   return (
  //     <Frontend_index/>
  //   );
  // } else {
  //   return (
  //     <Backend_index/>
  //   );

  // }

  return (
    <Router>
      <Route exact path = "/" component = {Frontend_index}/>
      {/* <Route exact path = "/Sign_up" component = {Sign_up}/> */}
      <Route exact path = "/SHACK" component = {Backend_index}/>
      <Route exact path = "/SHACK/:Class" component = {Class_assessment}/>
    </Router>
  )
  
}

let mapStateToProps = (state) => {
  return {store : state}
}

let mapDispatchToProps = (dispatch) => ({
  create_request_instances : (token) => dispatch({ type : 'create_business_request_instances' , token : token })
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
