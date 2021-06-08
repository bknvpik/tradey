import { useEffect, useState } from 'react'
import '../styles/pages/ViewItem.scss';
import Footer from '../components/Footer';
import Item from '../components/Item';
import http from '../http-common';

export default function ViewItem(props: any) {
    const [itemData, setItemData] = useState(Object);
    const [status, setStatus] = useState(false);
    const url = window.location.pathname;
    
    useEffect(() => {
        http.get(url, {withCredentials: true})
        .then(res => {
            setItemData(res.data);
            console.log(res.data);
            setStatus(true);
        }).catch(err => {
        console.log(err);
    });
    }, [url]);

    return (
        <div className="view-item">
            <div className="content">
                {status && <Item item={itemData} type="browse" />}
            </div>
            <Footer/>
        </div>
    )
}
