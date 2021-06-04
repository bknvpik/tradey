import { Link } from 'react-router-dom';
import '../styles/components/Item.scss';

export default function Item(props: any) {
    function handleSelect() {
        props.setSelectedItem(props.item.id);
        console.log(props.item.id);
    }
    
    return(
        <div className="item">
            <div className="item-img">
                <img src={process.env.PUBLIC_URL + `/assets/items-images/${ props.item.images[0].image }`} alt="item_img"></img>
            </div>
            <div className="item-info">
            <Link to={`/view-item/${ props.item.id }`} className="item-name">
                { props.item.name }
            </Link>

                <div className="wrapper">
                    <div className="item-details">
                        <span><b>size: </b>{ props.item.size.size }</span>
                        <span><b>condition: </b>{ props.item.condition.condition }</span>
                    </div>
                    {props.type === "browse" &&
                    <Link to={`/make-offer/${ props.item.id }`} className="item-trade">
                        <button>TRADE</button>
                    </Link>
                    }
                    {props.type === "offer" &&
                        <button onClick={ handleSelect }>Select</button>
                    }

                </div>
            </div>
        </div>
    )
}
