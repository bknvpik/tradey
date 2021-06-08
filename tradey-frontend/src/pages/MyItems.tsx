import { useEffect, useState } from 'react'
import '../styles/pages/MyItems.scss';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle'
import ItemsList from '../components/ItemsList'
import ProfileNav from '../components/ProfileNav';
import http from '../http-common';

export default function MyItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        http.get('/view-profile/my-items', {withCredentials: true})
        .then(res => {
            setItems(res.data);
            console.log(res.data);
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
            <ItemsList items={ items } />
            <Footer />
        </div>
    )
}
