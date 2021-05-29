import '../styles/components/Item.scss';

export default function Item(props: any) {
    return(
        <div className="item">
            <div className="item-img">
                <img src={`assets/items-images/${ props.images[0].image }`} alt="item_img"></img>
            </div>
            <div className="item-info">
                <div className="item-name">
                    { props.name }
                </div>
                <div className="wrapper">
                    <div className="item-details">
                        <span><b>size: </b>{ props.size }</span>
                        <span><b>condition: </b>{ props.condition }</span>
                    </div>
                    <div className="item-trade">
                        <button>TRADE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
