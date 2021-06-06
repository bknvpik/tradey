import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import http from '../http-common';
import '../styles/pages/ViewProfile.scss';

export default function ViewProfile(props: any) {
    const [userData, setUserData] = useState(Object);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        http.get('/view-profile', {withCredentials: true})
        .then(res => {
            setUserData(res.data);
            console.log(res.data);
            setStatus(true);
        }).catch(err => {
        console.log(err);
    });
    }, []);

    return (
        <div className="view-profile">
            <HeaderTitle text={ "My profile" }/>
            <Link to={`/view-profile`}>
                <button>About me</button>
            </Link>
            <Link to={`/view-profile/my-items`}>
                <button>My Items</button>
            </Link>
            <Link to={`/view-profile/my-offers`}>
                <button>My Offers</button>
            </Link>
            <Link to={`/view-profile/edit-profile`}>
                <button>Edit profile</button>
            </Link>
            <div className="info">
                {status &&
                <div className="main-info">
                    <img src=""></img>
                    <div className="user-details">
                        <>First Name: {userData.firstName}</>
                        <>Last Name: {userData.lastName}</>
                        <>E-Mail: {userData.user.email}</>
                    </div>
                    <div className="more-details">
                        <>Address: {userData.address1}</>
                        <>Address: {userData.address2}</>
                        <>City: {userData.city}</>
                        <>ZIP code: {userData.zipCode}</>
                        <>Country: {userData.country}</>
                    </div>
                </div>
                }
            </div>
           <Footer />
        </div>
    )
}
