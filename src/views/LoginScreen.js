import React, {useState} from 'react';
import '../css/LoginScreen.css'
import TopCustomNavBar from '../components/TopCustomNavBar';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loader from '../components/LoaderConfig';
import { useNavigate } from 'react-router-dom';
import {LOGINHANDLER} from "../Config/apiConfig";
import {useDispatch} from "react-redux";
import axios from "axios";
import {baseUrl, loginUrl} from "../Config/urlConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LoginScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const [value, setValue] = useState({
        username: '',
        password: ''
    })

  const submitHandler = (e) => {
    // navigate('/games')
    e.preventDefault()
    // const formData = new FormData(e.target),
    //     formDataObj = Object.fromEntries(formData.entries())
    // console.log(formDataObj)

      console.log(value.username, " - " , value.password)
      axios.post(baseUrl + loginUrl, {
          userName: value.username,
          password: value.password
      })
          .then(function (response) {
              // handle success
              console.log(response);
              if (!response.data.result) {
                  toast.warn("Your account login details are wrong! Please try again")
              } else {
                  toast.success("Sign in to Account successfully!")
                  navigate('/games')
              }
          })
          .catch(function (error) {
              // handle error
              toast.error("[500] Internal Server Error! - " + error)
          })
  }




  const loginHandler = () => {
    // LOGINHANDLER(value.username, value.password)


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
              <Form.Control type="email" placeholder="Enter here"  value={value.username} onChange={(event) =>
                  setValue({
                    ...value,
                    username: event.target.value
                  })
              }  />
              <Form.Text className="text-muted">
                We'll never share your username with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={value.password} onChange={(event) =>
                  setValue({
                    ...value,
                    password: event.target.value
                  })
              }  />
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
        <ToastContainer />
    </div>

  )
}
