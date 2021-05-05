import React, { Component } from 'react'
import '../styles/components/Item.scss';

export default class Item extends Component<any, any> {
    render() {
        return (
            <div className="item">
                <div className="item-img">
                    <img src="" alt="item_img"></img>
                </div>
                <div className="item-info">
                    <div className="item-name">
                        {this.props.name}
                    </div>
                    <div className="wrapper">
                        <div className="item-details">
                            <span><b>size: </b>{this.props.size}</span>
                            <span><b>condition: </b>{this.props.condition}</span>
                        </div>
                        <div className="item-trade">
                            <button>TRADE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
