import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import http from '../http-common';
import { AuthContext } from './AuthContext';

export default function SignOut() {
    const [message, setMessage] = useState("");
    const history = useHistory();
    const { setLogged } = useContext(AuthContext);

    useEffect(() => {
        http.get('/sign-out', {withCredentials: true}).then(res => {
            setMessage(res.data);
            setLogged(false);
            console.log(res.data);
            history.push("/");
        }).catch(err => {
            console.log(err);
        });
    }, [])

    return (
        <div className="sign-out">
            { message }
        </div>
    );
}
