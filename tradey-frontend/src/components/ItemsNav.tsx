import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/ItemsNav.scss';

export default class ItemsNav extends Component {
    constructor(props: any) {
        super(props);
        this.paths = ["clothing", "shoes", "accessories", "others"];
        this.url = window.location.pathname;
    }

    url: string;
    paths: string[];
    
    render() {
        return (
            <div className="items-nav">
                <div className="buttons">
                    {this.paths.map((path) =>
                        <Link to={this.url+ "/" + path} key={path}>
                            <button>{path.charAt(0).toUpperCase() + path.slice(1)}</button>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}
