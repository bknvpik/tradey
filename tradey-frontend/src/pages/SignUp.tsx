import { useState } from 'react';
import Input from '../components/Input';
import OrangeButton from '../components/OrangeButton';
import http from '../http-common';

export default function SignUp(props: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [message, setMessage] = useState("");

    const colors = { orange: "#FFFCF2", white: "#EB5E28" };

    function handleSubmit(e: any) {
        e.preventDefault();
        if(email && password && repeatPassword)
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
            password: password,
            createdAt: new Date().toLocaleString()
        }).then(res => {
            setMessage(res.data);
        }).catch(err => {
            setMessage(err.message);
            console.log(err);
        })
        e.target.reset();
        clearData();
    };

    function handleChangeEmail(e: any) {
        validateEmail(e.target.value) ?
            e.target.style.background = colors.orange :
            e.target.style.background = colors.white;
        setEmail(e.target.value);
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
      
    function clearData() {
        setEmail("");
        setPassword("");
        setRepeatPassword("");
    }

    return (
        <div className="login-signup">
            <div className="bg-dim"></div>
            <div className="login-signup-form">
                <form onSubmit={ handleSubmit }>
                    <div className="message">{ message }</div>
                    <Input type="text" name="email" placeholder="e-mail" value={ email } onChange={ handleChangeEmail } />
                    <Input type="password" name="password" placeholder="password" value={ password } onChange={ handleChangePassword } />
                    <Input type="password" name="repeatPassword" placeholder="repeat password" value={ repeatPassword } onChange={ handleChangeRepeatPassword } />
                    <OrangeButton type="submit" text="SIGN UP" />
                </form>
            </div>
        </div>
    )
}
