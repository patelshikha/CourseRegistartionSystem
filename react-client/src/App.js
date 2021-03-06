import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
//
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
//
import List from './components/List';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Home from './components/Home';
import Login from './components/Login';
//
function App() {

  return (
    <Router style={styles.mainView}>
      <Navbar bg="#ff5e6c" expand="lg" style={styles.mainView}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={styles.mainView}>
           
            <Nav.Link style={styles.mainView} href="/login">Login</Nav.Link>
            <Nav.Link style={styles.mainView}  href="/signup">Signup</Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      <div>
          
          <Route render ={()=> < Home />} path="/home" />
          <Route render ={()=> < Login />} path="/login" />
          <Route render ={()=> < List />} path="/list" />
          <Route render ={()=> < Edit />} path="/edit/:id" />
          <Route render ={()=> < Create />} path="/signup" />
          <Route render ={()=> < Show />} path="/show/:id" />
      </div>

    </Router>


  );
}

//<Route render ={()=> < App />} path="/" />
export default App;
const styles = {
  mainView: {
    color:'white',
    backgroundColor: '#ff5e6c',
    paddingRight: '200',
    textAlign:'center',
   

  }
}