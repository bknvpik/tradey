import React, { useEffect, useState } from 'react';
import '../styles/pages/MyOffers.scss';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import ProfileNav from '../components/ProfileNav';
import http from '../http-common';
import Offer from '../components/Offer';
import Item from '../components/Item';

export default function MyOffers() {
    const [outgoing, setOutgoing] = useState<any[]>([]);
    const [incoming, setIncoming] = useState([]);
    const [status, setStatus] = useState(false);
    const test = [1, 2, 3, 4, 5]
    useEffect(() => {
        http.get('/view-profile/my-offers', {withCredentials: true})
        .then(res => {
            setOutgoing(res.data.myOffers);
            setIncoming(res.data.offeredToMe);
            setStatus(true);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])



    return (
        <div className="my-offers">

            <HeaderTitle text={ "My Offers" } style={{ height: "15vh" }} />
            <div className="content">
                <ProfileNav />

                <div className="outgoing">
                    <div className="header">outgoing</div>
                    {status && 
                outgoing.map((o: any) =>
                    <Offer key={o} offer={o}/>
                )
                    }
                </div>
                
                <div className="incoming">
                    <div className="header">incoming</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
