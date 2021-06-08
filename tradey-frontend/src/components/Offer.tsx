import '../styles/components/Offer.scss';

export default function Offer(props: any) {
    return (
        <div className="offer">
            <div className="item">
                <div className="img-wrapper">
                    <img src={process.env.PUBLIC_URL + `/assets/items-images/${ props.offer.itemOffered.images[0].image }`} alt="item_img" />
                </div>
                <h3>{ props.offer.itemOffered.name }</h3>
                <p><b>user:</b> { props.offer.itemOffered.user.email }</p>
            </div>
            <div className="status">
                <i className="fas fa-angle-double-right"></i>
                <h1>STATUS</h1>
                { props.offer.status }
            </div>
            <div className="item">
                <div className="img-wrapper">
                    <img src={process.env.PUBLIC_URL + `/assets/items-images/${ props.offer.item.images[0].image }`} alt="item_img" />
                </div>
                <h3>{ props.offer.item.name }</h3>
                <p><b>user:</b>  { props.offer.item.user.email }</p>
            </div>
        </div>
    )
}
