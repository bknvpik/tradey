import React, { useEffect, useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import ItemsList from '../components/ItemsList'
import http from '../http-common';

export default function MyItems(props: any) {
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
            <HeaderTitle text={ "My Items" } />
            <ItemsList items={ items } />
        </div>
    )
}
