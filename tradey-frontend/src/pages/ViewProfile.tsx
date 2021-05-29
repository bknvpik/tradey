import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import http from '../http-common';
import '../styles/pages/ViewProfile.scss';

export default function ViewProfile(props: any) {
    const [userData, setUserData] = useState(Object);
    useEffect(() => {
        http.get('/view-profile', {withCredentials: true})
        .then(res => {
            setUserData(res.data);
        }).catch(err => {
        console.log(err);
    });
    }, []);

    return (
        <div className="view-profile">
            <HeaderTitle text={ "My profile" }/>
            <div className="info">
                <div className="main-info">
                    <img src=""></img>
                    <div className="user-details">
                        <>First Name: {userData.firstName}</>
                        <>Last Name: {userData.lastName}</>
                        <>E-Mail: {userData.email}</>
                    </div>
                    <button>edit profile</button>
                    <div className="more-details">
                        <>Address: {userData.firstName}</>
                        <>City: {userData.lastName}</>
                        <>ZIP code: {userData.email}</>
                        <>Country: {userData.email}</>
                    </div>
                    <div className="more-details">
                        <>Card number: {userData.firstName}</>
                        <>Valid thru: {userData.lastName}</>
                        <>CVV: {userData.email}</>
                        <>Name on card: {userData.email}</>
                    </div>
                </div>
            </div>
           <Footer />
        </div>
    )
}
