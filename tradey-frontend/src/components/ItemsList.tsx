import React from 'react'
import '../styles/components/ItemsList.scss';
import Item from '../components/Item';

export default function ItemsList(props: any) {
    return(
        <div className="items-list">
            <div className="options-tab">
            </div>
            <div className="list">
                { props.items.map((item: any) => 
                    <Item key={item.id} name={item.name} size={item.size.size} condition={item.condition.condition} images={item.images.image} />
                ) }
            </div>
        </div>
    )
}
