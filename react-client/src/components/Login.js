import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Details from './Details'
function App(props) {
  //state variable for the screen, admin or user
  const [screen, setScreen] = useState('auth');
  //store input field data, user name and password
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();
  const apiUrl = "http://localhost:3000/signin";
  //send username and password to the server
  // for initial authentication
  const auth = async () => {
    console.log('calling auth')
    console.log(emailId)
    try {
      //make a get request to /authenticate end-point on the server
      const loginData = { auth: { emailId, password } }
      //call api
      const res = await axios.post(apiUrl, loginData);
      
      console.log('response',res.data)
      console.log(res.data.screen)
      //process the response
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        
      }
      else{
        alert("Invalid email id or password!!");
      }
    } catch (e) { //print the error
      console.log(e);
    }
  
  };
  const signup = async () => {
    console.log('calling signup')
    window.open('/signup')
  };
  //check if the user already logged-in
  const readCookie = async () => {
    try {
      //
      const res = await axios.get('/read-cookie');
      // 
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        console(res.data.screen)
      }
    } catch (e) {
      setScreen('auth');
      console.log(e);
    }
  };
  //runs the first time the view is rendered
  //to check if user is signed in
  useEffect(() => {
    readCookie();
  }, []);
  //
  return (
    <html style={styles.mainView}>
     <br/> <br/>  <h3>Course Registration System</h3> <br/> <br/> <br/> <br/>
    <div className="App" >
      {screen === 'auth' 
        ? <div >
          <label>Email Id: </label>
          <br/>
          <input type="text" onChange={e => setEmailId(e.target.value)} />
          <br/>
          <label>Password: </label>
          <br/>
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <br/>
          <button style={styles.button} onClick={auth}>Login</button>  
          <br/> <br/> <br/>
          <h6>Have not registered yet?</h6>
          <button style={styles.button} onClick={signup}>Signup</button>
        </div>
        : <Details screen={screen} setScreen={setScreen} />
      }
    </div>
    </html>
  );
}

export default App;

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