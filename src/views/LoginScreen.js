import React from 'react';
import '../css/LoginScreen.css'
import TopCustomNavBar from '../components/TopCustomNavBar';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loader from '../components/LoaderConfig';
import { useNavigate } from 'react-router-dom';


export default function LoginScreen() {
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate('/')
  }

  return (
    <div className='defaultStyle'>
      <TopCustomNavBar />

      <div className='center'>
        <div className='main-container'>
          <div id='welcome-back-container'>
            <h2 id='welcome-back'>Welcome Back!</h2>
          </div>
          <br />
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter here" />
              <Form.Text className="text-muted">
                We'll never share your username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <br />
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                LOGIN
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <Loader isLoading={false}/>
    </div>

  )
}
