import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import ItemsList from '../components/ItemsList';
import '../styles/components/ItemsNav.scss';

interface State {
    items: any[];
    category: string;
}

export default class Browse extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.paths = ["clothing", "shoes", "accessories", "others"];
        this.url = window.location.pathname;
        this.state = {
            items: [],
            category: 'clothing'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    url: string;
    paths: string[];

    componentDidMount() {
        axios.get(`http://localhost:3000${this.url}`)
        .then(res => {
          const data = res.data;
          this.setState({ items: data });
        })
    }

    handleChange() {
        axios.get(`http://localhost:3000/browse/${this.state.category}`)
        .then(res => {
          const data = res.data;
          this.setState({ items: data });
        })
    }

    render() {
        return (
            <div className="browse">
                    <SearchBar />
                    <div className="items-nav">
                        <div className="buttons">
                            {this.paths.map((path) => 
                                <Link to={`/browse/${path}`} key={path}>
                                    <button className={this.state.category === path ? "active" : "" } onClick={() => this.setState({category: path}, this.handleChange)}>{path}</button>
                                </Link> 
                            )}
                        </div>
                    </div>
                <ItemsList items={this.state.items} />
                <Footer />
            </div>
        )
    }
}
