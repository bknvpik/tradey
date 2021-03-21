import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default class ViewProfile extends Component {
    render() {
        return (
            <div className="view-profile">
                <Nav />
                View Profile page
                <Footer />
            </div>
        )
    }
}
