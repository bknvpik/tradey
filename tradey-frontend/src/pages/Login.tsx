import { useState } from 'react';
import axios from 'axios';

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
        axios.post("http://localhost:3000/login", {
            username: email,
            password: password,
        }, { withCredentials: true }).then(res => {
            console.log(res.data);
            //TODO retreive jwt token adn save it to local storage
            //localStorage.setItem('token', res.data.token);
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
                <form onSubmit={handleSubmit}>
                    <div className="message">{ message }</div>
                    <input type="text" name="email" placeholder="e-mail" value={ email } onChange={ handleChangeEmail } />
                    <input type="password" name="password" placeholder="password" value={ password } onChange={ handleChangePassword } />
                    <button type="submit">Login</button>
                    <div className="form-links">
                        Forgot your password?
                    </div>
                </form>
            </div>
        </div>
    );
};