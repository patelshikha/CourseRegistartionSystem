import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

function Create(props) {
  const [user, setUser] = useState({ _id: '', firstName: '', lastName: '', 
                email: '',username: '',password: '',studentNumber:'',address:'',city:'',phoneNumber:'',program:'' });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/";

  const saveUser = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = { firstName: user.firstName, lastName: user.lastName,
      studentNumber: user.studentNumber,
      address:user.address,
      city:user.city,
      phoneNumber:user.phoneNumber,
      program:user.program, 
      email: user.email,username: user.username, password: user.password };
    axios.post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        alert("Successfully Registered! Now you can login!!");
        props.history.push('/login')
      }).catch((error) => setShowLoading(false));
  };

  const onChange = (e) => {
    e.persist();
    setUser({...user, [e.target.name]: e.target.value});
  }

  return (
    <div style={styles.mainView}>
      {showLoading && 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
      } 
      <Jumbotron style={styles.mainView}>
        <Form onSubmit={saveUser}>
          <Form.Group>
            
            <Form.Control type="text" name="firstName" id="firstName" placeholder="Enter first name" value={user.firstName} onChange={onChange} />
          </Form.Group>
          <Form.Group>
           
            <Form.Control type="text" name="lastName" id="lastName" placeholder="Enter last name" value={user.lastName} onChange={onChange} />
          </Form.Group>
          <Form.Group>
           
            <Form.Control type="text" name="email" id="email" rows="3" placeholder="Enter email" value={user.email} onChange={onChange} />
          </Form.Group>
          <Form.Group>
           
            <Form.Control type="text" name="username" id="address" placeholder="Enter address" value={user.address} onChange={onChange} />
          </Form.Group>
          <Form.Group>
          
          <Form.Control type="text" name="studentNumber" id="studentNumber" placeholder="Enter student number" value={user.studentNumber} onChange={onChange} />
        </Form.Group>
        
        <Form.Group>
          
          <Form.Control type="text" name="city" id="city" placeholder="Enter city" value={user.city} onChange={onChange} />
        </Form.Group>
        <Form.Group>
          
          <Form.Control type="text" name="phoneNumber" id="phoneNumber" placeholder="Enter phoneNumber" value={user.phoneNumber} onChange={onChange} />
        </Form.Group>
        <Form.Group>
          
          <Form.Control type="text" name="program" id="program" placeholder="Enter program" value={user.program} onChange={onChange} />
        </Form.Group>
        
          <Form.Group>
          
            <Form.Control type="text" name="password" id="password" placeholder="Enter password" value={user.password} onChange={onChange} />
          </Form.Group>
          
          <Button style={styles.button} variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default withRouter(Create);
const styles = {
  mainView: {
    fontSize: 20,
 
    fontFamily: 'avenir-med',
    textAlign: 'center',
    backgroundColor: '#fff5d7',
    position:'fixed',
    padding:'50',
  marginBottom:'150',
  marginTop:'150',
    paddingBottom:'100',

    width: '100%',
    height: '100%'
  },
  button: {
    backgroundColor: ' #ff5e6c',
    fontSize: 20,
    fontFamily: 'avenir-med',

    textAlign: 'center'
  }
}