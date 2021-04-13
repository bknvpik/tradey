import React, { Component } from 'react'
import '../styles/components/Item.scss';

export default class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="item-img">
                    <img src="" alt="item_img"></img>
                </div>
                <div className="item-info">
                    <div className="item-name">
                        Item Name
                    </div>
                    <div className="wrapper">
                        <div className="item-details">
                            <span>size: 9US</span>
                            <span>condition: brand new</span>
                        </div>
                        <div className="item-trade">
                            <div className="item-value">
                                VALUE: 300$
                            </div>
                            <button>TRADE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
