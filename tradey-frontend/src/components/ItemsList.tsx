import React, { Component } from 'react'
import '../styles/components/ItemsList.scss';
import Item from '../components/Item';

export default class ItemsList extends Component {
    render() {
        return (
            <div className="items-list">
                <div className="options-tab">

                </div>
                <div className="list">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        )
    }
}
