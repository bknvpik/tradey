import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';

export default function ViewProfile(props: any) {
    const [userData, setUserData] = useState(Object);
    useEffect(() => {
        axios.get('http://localhost:3000/view-profile', {withCredentials: true})
        .then(res => {
            setUserData(res.data);
        })
    }, []);

    return (
        <div className="view-profile">
            First Name: { userData.firstName }
            Last Name: { userData.lastName }
            email: { userData.email }
           <Footer />
        </div>
    )
}
