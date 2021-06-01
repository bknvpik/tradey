import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import Item from '../components/Item';
import OrangeButton from '../components/OrangeButton';
import http from '../http-common';

export default function MakeOffer(props: any) {
    const [itemData, setItemData] = useState(Object);
    const [items, setItems] = useState([]);
    const url = window.location.pathname;

    useEffect(() => {
        http.get(url, {withCredentials: true})
        .then(res => {
            setItemData(res.data.tradingItem);
            setItems(res.data.userItems);
            console.log(itemData);
            console.log(items);
        }).catch(err => {
        console.log(err);
    });
    }, [url]);

    return (
        <div className="make-offer">
            <HeaderTitle text="Make An Offer"/>
            <div className="current-offer">
            </div>
            <HeaderTitle text="Select Your Item"/>
            <div className="selection">
                <div className="items-list">
                
                </div>
                <OrangeButton text="TRADE"/>
            </div>
            <Footer />
        </div>
    )
}
