import React, { Component } from 'react'
// import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
// import {FacebookLoginButton} from 'react-social-login-buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

  export default class Auth extends Component {
    login()
    {
        alert("login called");
    }
    render() {
        return (
            <BrowserRouter>
               
                <div className=" container-fluid relative shadow-lg mx-auto  card-body w-50 h-80 z-depth-2 align-items-center justify-content-center ">
            <h1 className="flex justify-center items-center h-24 bg-purple-500">
                Sign in
            </h1>
            
            <form className="flex flex-col justify-center items-center rounded rounded-2xl gap-4 m-5">
 
                <input className="p-2" name="email" id="email" placeholder="E-mail">
                </input>

                <input className="p-2" name="password" id="password" placeholder="Password">
                </input>
                <button className="button bg-purple-500 p-2 w-28 rounded rounded-3xl hover:bg-purple-700">Login</button>
                <p>
                    Not yet registered <a className="text-blue-700" href="/signup">Signup</a>
                </p>

            </form>
        </div>         
               
             
            </BrowserRouter>
            
           
        )
    }
}
