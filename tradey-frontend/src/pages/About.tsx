import '../styles/pages/About.scss';
import Footer from '../components/Footer';
import AboutPoint from '../components/AboutPoint';
import HeaderTitle from '../components/HeaderTitle';

export default function About(props: any) {
    const points = [
        {id: 1, title: "Add items", info: "Add the items you want to trade, provide images, condition, size and value - everything will be verified by our team"},
        {id: 2, title: "Make offer", info: "Make a trade offer to the user, whose item you are interested in"},
        {id: 3, title: "Pack and ship your item", info: "When the user accepts your offer - carefully pack your item and ship to the provided address"},
        {id: 4, title: "Receive your item", info: "We will verify and authenticate your item and item received from the user with whom you are trading and ship right items to both sides"}
    ]

    return (
        <div className="about">                    
            <div className="about-us">
                <div className="about-left"><h1>About us</h1></div>
                <div className="about-right"><img src="tradey-logo.svg" alt="logo"/></div>
            </div>
            <div className="about-content">
                <p>
                    tradey is a place where you can safely trade items like shoes, clothes, accessories etc... with people  from all over the world.
                </p>
            </div>
            <HeaderTitle text="How It Works?" />
            <div className="how-content">
                {points.map((point) => 
                    <AboutPoint
                        key={point.id}
                        number={point.id}
                        title={point.title}
                        info={point.info}
                    />
                )}
            </div>
            <div className="important">
                <div className="exclamation">
                    <i className="fas fa-exclamation-circle"></i>
                </div>
                <h1>IMPORTANT INFORMATIONS</h1>
                <i className="fas fa-check"></i>
                <div className="info-1">
                    Our team verifies and authenticate every item, when your item is not authentic or it doesn't match the description you are charged with a penalty of 15% of the item value
                </div>
                <i className="fas fa-dollar-sign"></i>
                <div className="info-2">
                    Each trade transaction covers $10 shipping and a $5 transaction fee
                </div>
            </div>
            <Footer />
        </div>
    )
}
