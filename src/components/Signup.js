import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
           
            <div className=" container-fluid relative shadow-lg mx-auto  card-body w-50 h-80 z-depth-2 align-items-center justify-content-center ">
        <h1 className="flex justify-center items-center w-full h-24 bg-purple-500">
            Register
        </h1>
        
        <form className="flex flex-col justify-center items-center rounded rounded-2xl gap-4 m-5">
            <input className="m-2" name="name" id="
            name" placeholder="Name">
            </input>
            <input className="m-2 w-50" name="email" id="email" placeholder="E-mail">
            </input>

            <input className="m-2" name="password" id="password" placeholder="Password">
            </input>
            <button className="button bg-purple-500 p-2 w-28 rounded rounded-3xl hover:bg-purple-700">Signup</button>
            <p>
                Already registered! <a className="text-blue-700" href="/login">Login</a>
            </p>

        </form>
            </div>
  

        )
    }
}
