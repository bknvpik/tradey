import React, { useEffect } from 'react'
import '../styles/components/Offer.scss';
import Item from './Item'

export default function Offer(props: any) {
    useEffect(() => {
        console.log(props.offer)
    }, [])
    return (
        <div className="offer">
            <div className="my-item">
                { props.offer.item.name }
            </div>
            <div className="status">
                { props.offer.status }
            </div>
            <div className="offered-item">
                { props.offer.itemOffered.name }
            </div>
        </div>
    )
}
