import React, { useEffect, useState } from 'react';
import http from '../http-common';

export default function SignOut() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        http.get('/sign-out', {withCredentials: true}).then(res => {
            setMessage(res.data);
            console.log(res.data);
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
