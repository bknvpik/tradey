import React from 'react';
import '../styles/components/Footer.scss';

export default function Footer(props: any) {
    return(
        <footer className="footer">
            <div className="contact">
                <p><i className="fas fa-envelope-square"></i>tradey.support@tradey.com</p>
                <p><i className="fas fa-phone-square-alt"></i>+48 000 111 222</p>
            </div>
            <div className="copyright">
                <p>©2021 tradey. All Rights Reserved.</p>
            </div>
            <div className="social">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
            </div>
        </footer>
    )
}
