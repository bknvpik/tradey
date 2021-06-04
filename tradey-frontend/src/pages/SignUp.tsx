import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import http from '../http-common';

export default function SignUp(props: any) {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [message, setMessage] = useState("");

    const colors = { orange: "#FFFCF2", white: "#EB5E28" };

    function handleSubmit(e: any) {
        e.preventDefault();
        if(email && firstName && lastName && password && repeatPassword)
            setMessage("");
        else {
            setMessage("Fill all fields!");
            return;
        }
        if(validateEmail(email))
            setMessage("");
        else {
            setMessage("Input correct email!");
            return;
        }
        if(validatePassword(password, repeatPassword))
            setMessage("");
        else {
            setMessage("Passwords are not equal!");
            return;
        }
        if(validatePasswordLength(password))
            setMessage("");
        else {
            setMessage("Password should contain at least 8 characters!");
            return;
        }
        http.post("/sign-up", {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            createdAt: new Date().toLocaleString()
        }).then(res => {
            setMessage(res.data);
        }).catch(err => {
            setMessage(err.message);
            console.log(err);
        })
        clearData();
    };

    function handleChangeEmail(e: any) {
        validateEmail(e.target.value) ?
            e.target.style.background = colors.orange :
            e.target.style.background = colors.white;
        setEmail(e.target.value);
    }

    function handleChangeFirstName(e: any) {
        setFirstName(capitalizeFirstLetter(e.target.value));
    }

    function handleChangeLastName(e: any) {
        setLastName(capitalizeFirstLetter(e.target.value));
    }

    function handleChangePassword(e: any) {
        validatePasswordLength(e.target.value) ?
            e.target.style.background = colors.orange :
            e.target.style.background = colors.white; 
        setPassword(e.target.value);
    }

    function handleChangeRepeatPassword(e: any) {
        validatePassword(password, e.target.value) && validatePasswordLength(e.target.value) ? 
            e.target.style.background = colors.orange :
            e.target.style.background = colors.white;
        setRepeatPassword(e.target.value);
    }

    function validateEmail(email: string) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }

    function validatePassword(pass: string, repeatPass: string) {
        return pass === repeatPass;
    }

    function validatePasswordLength(pass: string) {
        return pass.length >= 8;
    }

    function capitalizeFirstLetter(text: string) {
        return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
    }
      
    function clearData() {
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setRepeatPassword("");
    }

    return (
        <div className="login-signup">
            <div className="bg-dim"></div>
            <div className="login-signup-form">
                <form onSubmit={ handleSubmit }>
                    <div className="message">{ message }</div>
                    <input type="text" name="email" placeholder="e-mail" value={ email } onChange={ handleChangeEmail } />
                    <input type="text" name="firstName" placeholder="first name" value={ firstName } onChange={ handleChangeFirstName } />
                    <input type="text" name="lastName" placeholder="last name" value={ lastName } onChange={ handleChangeLastName } />
                    <input type="password" name="password" placeholder="password" value={ password } onChange={ handleChangePassword } />
                    <input type="password" name="repeatPassword" placeholder=" repeat password" value={ repeatPassword } onChange={ handleChangeRepeatPassword } />
                    <button type="submit">Sign Up</button>
                    <div className="form-links">
                        Already registered? &nbsp;
                        <Link to="/login">
                            Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
