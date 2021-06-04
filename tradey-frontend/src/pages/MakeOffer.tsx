import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ItemsList from '../components/ItemsList';
import HeaderTitle from '../components/HeaderTitle';
import Item from '../components/Item';
import OrangeButton from '../components/OrangeButton';
import http from '../http-common';

export default function MakeOffer(props: any) {
    const [item, setItem] = useState(Object);
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [test, setTest] = useState(Object);
    const url = window.location.pathname;

    function handleSubmit() {
        //console.log(item.id)
        http.post("/make-offer", {
            createdAt: new Date().toLocaleString(),
            itemId: item.id,
            itemOfferedId: selectedItem,
        }).then(res => {
            //setMessage(res.data);
        }).catch(err => {
            //setMessage(err.message);
            console.log(err);
        })
        //clearData();
    }

    useEffect(() => {
        http.get(url, {withCredentials: true})
        .then(res => {
            setItem(res.data.item);
            setItems(res.data.items);
            setStatus(true);
        }).catch(err => {
        console.log(err);
    });
    }, [url]);

    useEffect(() => {
        console.log(selectedItem);
        http.get(`/make-offer/${selectedItem}`, {withCredentials: true})
        .then(res => {
            setTest(res.data.item);
        }).catch(err => {
        console.log(err);
    });
    }, [selectedItem])

    return (
        <div className="make-offer">
            <HeaderTitle text="Make An Offer"/>
            <div className="current-offer">
                {status && <Item item={ item } />}
                {selectedItem && <Item item = { test } />}
                <button onClick={handleSubmit}>Make Offer</button>
            </div>
            <HeaderTitle text="Select Your Item"/>
            <div className="selection">
                {status && <ItemsList items={ items } type="offer" setSelectedItem={setSelectedItem}/>}
                <OrangeButton text="TRADE"/>
            </div>
            <Footer />
        </div>
    )
}
