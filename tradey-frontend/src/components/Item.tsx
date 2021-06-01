import { Link } from 'react-router-dom';
import '../styles/components/Item.scss';

export default function Item(props: any) {
    return(
        <div className="item">
            <div className="item-img">
                <img src={`assets/items-images/${ props.images[0].image }`} alt="item_img"></img>
            </div>
            <div className="item-info">
                <Link to={`/view-item/${ props.itemId }`} className="item-name">
                    { props.name }
                </Link>
                <div className="wrapper">
                    <div className="item-details">
                        <span><b>size: </b>{ props.size }</span>
                        <span><b>condition: </b>{ props.condition }</span>
                    </div>
                    <Link to={`/make-offer/${ props.itemId }`} className="item-trade">
                        <button>TRADE</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
