import '../styles/components/ItemsList.scss';
import Item from '../components/Item';

export default function ItemsList(props: any) {
    return(
        <div className="items-list">
            <div className="list">
                { props.items.map((item: any) =>
                    <Item key={ item.id } item={ item } type={ props.type } setSelectedItem={props.setSelectedItem}/>
                ) }
            </div>
        </div>
    )
}
