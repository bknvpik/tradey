import { useEffect, useState } from 'react';
import '../styles/pages/MyOffers.scss';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import ProfileNav from '../components/ProfileNav';
import http from '../http-common';
import Offer from '../components/Offer';

export default function MyOffers() {
    const [outgoing, setOutgoing] = useState<any[]>([]);
    const [incoming, setIncoming] = useState([]);
    const [status, setStatus] = useState(false);
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
                <div className="block">
                    <div className="header">outgoing</div>
                        {status && 
                            outgoing.map((o: any) =>
                                <Offer key={o} offer={o}/>
                        )}
                </div>
                <div className="block">
                    <div className="header">incoming</div>
                        {status && 
                            incoming.map((o: any) =>
                                <Offer key={o} offer={o}/>
                        )}
                </div>
            </div>
            <Footer />
        </div>
    )
}
