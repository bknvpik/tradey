import React, { Component } from 'react';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import Item from '../components/Item';
import OrangeButton from '../components/OrangeButton';

export default class MakeOffer extends Component {
    render() {
        return (
            <div className="make-offer">
                <HeaderTitle text="Make An Offer"/>
                <div className="current-offer">
                    <Item></Item>
                    <Item></Item>
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
}
