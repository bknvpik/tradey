import { useEffect, useState } from 'react'
import '../styles/pages/MyItems.scss';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle'
import ItemsList from '../components/ItemsList'
import ProfileNav from '../components/ProfileNav';
import http from '../http-common';

export default function MyItems() {
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        http.get('/view-profile/my-items', {withCredentials: true})
        .then(res => {
            setItems(res.data);
            console.log(res.data);
            setStatus(true);
        }).catch(err => {
            console.log(err);
    });
    }, []);

    return (
        <div className="my-items">
            <HeaderTitle text={ "My Items" } style={{ height: "15vh" }} />
            <div className="content">
                <ProfileNav />
            </div>
            {status &&
                <ItemsList items={ items } />
            }
            <Footer />
        </div>
    )
}
