import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ItemsNav from '../components/ItemsNav';
import Footer from '../components/Footer';
import ItemsList from '../components/ItemsList';

export default class Browse extends Component {
    render() {
        return (
            <div className="browse">
                    <SearchBar />
                    <ItemsNav />
                    <ItemsList />
                <Footer />
            </div>
        )
    }
}
