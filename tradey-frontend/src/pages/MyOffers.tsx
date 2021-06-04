import React, { useEffect } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import http from '../http-common';

export default function MyOffers() {
    useEffect(() => {
        http.get('/view-profile/my-offers', {withCredentials: true})
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className="my-offers">
            <div className="outgoing">
                <HeaderTitle text={ "Outgoing" }/>
            </div>
            <div className="incoming">
                <HeaderTitle text={ "Incoming" }/>
            </div>
        </div>
    )
}
