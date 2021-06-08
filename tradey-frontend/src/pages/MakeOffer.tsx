import { useEffect, useState } from 'react';
import '../styles/pages/MakeOffer.scss';
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
    const [status2, setStatus2] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    const [offeredItem, setOfferedItem] = useState(Object);
    const [message, setMessage] = useState("");
    const url = window.location.pathname;

    function handleSubmit() {
        http.post("/make-offer", {
            createdAt: new Date().toLocaleString(),
            item: item.id,
            itemOffered: offeredItem.id,
        }).then(res => {
            setMessage("Offer created!");
        }).catch(err => {
            setMessage(err.message);
            console.log(err);
        })
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
        console.log(selectedId);
        http.get(`/make-offer/${selectedId}`, {withCredentials: true})
        .then(res => {
            if(status && selectedId)
            {
            setOfferedItem(res.data.item);
            console.log(offeredItem)
            setStatus2(true);
            }
        }).catch(err => {
        console.log(err);
    });
    }, [selectedId])

    return (
        <div className="make-offer">
            <HeaderTitle text="Make An Offer" style={{ height: "15vh" }} />
            <div className="content">
                <div className="messages">{message}</div>
                <div className="offer">
                    <div className="offer-wrapper">
                        {status && <Item item={ item } />}
                        {status2 && <Item item = { offeredItem } />}
                    </div>
                    <div className="button-wrapper">
                        <OrangeButton text="TRADE" onClick={ handleSubmit }/>
                    </div>
                </div>
            </div>
            <HeaderTitle text="Select Your Item" style={{ height: "15vh" }} />
                {status && <ItemsList items={ items } type="offer" setSelectedItem={setSelectedId}/>}
            <Footer />
        </div>
    )
}
