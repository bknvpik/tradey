import React, { Component } from 'react'
import '../styles/components/ItemsList.scss';
import Item from '../components/Item';

export default class ItemsList extends Component<any, any> {
    render() {
        return (
            <div className="items-list">
                <div className="options-tab">
                </div>
                <div className="list">
                    {this.props.items.map((item: any) => 
                        <Item key={item.name} size={item.size.size} condition={item.condition.condition} />
                    )}
                </div>
            </div>
        )
    }
}
