import { useContext, useState } from 'react';
import { AuthContext } from '../components/AuthContext';
import Input from '../components/Input';
import OrangeButton from '../components/OrangeButton';
import http from '../http-common';

export default function Login(props: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { logged, setLogged } = useContext(AuthContext);

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
        }).then(res => {
            setMessage(res.data);
            setLogged(true);
            props.history.push("/browse");
        }).catch(err => {
            console.log(err);
            setMessage(err.message);
        })
        e.target.reset();
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
                    <Input type="text" name="email" placeholder="e-mail" value={ email } onChange={ handleChangeEmail } />
                    <Input type="password" name="password" placeholder="password" value={ password } onChange={ handleChangePassword } />
                    <OrangeButton type="submit" text="LOGIN" />
                </form>
            </div>
        </div>
    );
}
