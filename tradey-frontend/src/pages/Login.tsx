import { useState } from 'react';
import { Link } from 'react-router-dom';
import http from '../http-common';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e: any) {
        e.preventDefault();
        setMessage("");
        if(!email || !password) {
            setMessage("Fields cannot be empty!");
            return;
        }
        http.post("/login", {
            username: email,
            password: password,
        }, { withCredentials: true }).then(res => {
            setMessage(res.data);
        }).catch(err => {
            console.log(err);
            setMessage(err.message);
        })
        clearData();
    }

    function handleChangeEmail(e: any) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e: any) {
        setPassword(e.target.value);
    }

    function clearData() {
        setEmail("");
        setPassword("");
    }

    return(
        <div className="login-signup">
            <div className="bg-dim"></div>
            <div className="login-signup-form">
                <form onSubmit={ handleSubmit }>
                    <div className="message">{ message }</div>
                    <input type="text" name="email" placeholder="e-mail" value={ email } onChange={ handleChangeEmail } />
                    <input type="password" name="password" placeholder="password" value={ password } onChange={ handleChangePassword } />
                    <button type="submit">Login</button>
                    <div className="form-links">
                        Forgot your password?
                        <Link to="/">
                            Reset
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};