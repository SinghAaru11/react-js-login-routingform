import React from 'react';
import login from '../login.json';
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


function Login() {

    // useLocation Hook returns the location object that represents the current URL,created a variable location by useLocation Hook
    //so when we want to access the property we will use Location.pathname property represents the path of URL.
    //whatever the useLocation object get returned whatever will be stored in variable location
    // The useLocation object will update each time when the url changes,like when you want to trigger a funtion based on the change of the url

    let location = useLocation();
    let navigate = useNavigate();
    //useNavigate is creating here & will use later on "onSubmit={handlesubmit} event on form submission".
    //useNavigate Hook help in navigating after form submission,and returns a funtion that lets you navigate

    let [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // console.log(formData);

    }

    function handleSubmit(e) {
        
        e.preventDefault();
        console.log(e)
        console.log(e.target[0].value);
        console.log(e.target[1].value);

        // const {email,password}=e.target;
        // why because of this the logics was not working ??

        if (login.email === email && login.password === password) {

            (alert("login sucessful"))
            //** when the click event is happening on the button,we are giving the path '/' of a certain page to useNavigate hook a/c to the result of event  */
            navigate("/Signup", true)

        }
        else {
            navigate("/InvalidCredentials", true)
        }


    }

    return (
        <div className='main-form'>
            <form onSubmit={handleSubmit} className="login-form">
                <h2> Login </h2>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={email} />

                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" id="password" onChange={handleChange} value={password} />

                </div>
                <button className="sign-in" type="submit"> Login </button>
            </form>
        </div>
    )
}

export default Login;