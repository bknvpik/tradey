import React, { useEffect, useState } from 'react'
import http from '../http-common';

export default function ViewItem(props: any) {
    const [itemData, setItemData] = useState(Object);
    const url = window.location.pathname;
    
    useEffect(() => {
        http.get(url, {withCredentials: true})
        .then(res => {
            setItemData(res.data);
        }).catch(err => {
        console.log(err);
    });
    }, [url]);

    return (
        <div className="view-item">
            <div className="item-name">
                {itemData.name}
                {itemData.description}
            </div>
            <div className="gallery">
                <img alt=""></img>
            </div>
            <div className="item-details">

            </div>
        </div>
    )
}
