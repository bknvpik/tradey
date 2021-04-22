import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ItemsNav from '../components/ItemsNav';
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
                            <Link to={`/browse/${this.paths[0]}`}>
                                <button onClick={() => this.setState({category: this.paths[0]}, this.handleChange)}>{this.paths[0]}</button>
                            </Link>
                            <Link to={`/browse/${this.paths[1]}`}>
                                <button onClick={() => this.setState({category: this.paths[1]}, this.handleChange)}>{this.paths[1]}</button>
                            </Link>
                            <Link to={`/browse/${this.paths[2]}`}>
                                <button onClick={() => this.setState({category: this.paths[2]}, this.handleChange)}>{this.paths[2]}</button>
                            </Link>
                            <Link to={`/browse/${this.paths[3]}`}>
                                <button onClick={() => this.setState({category: this.paths[3]}, this.handleChange)}>{this.paths[3]}</button>
                            </Link>
                        </div>
                    </div>
                <ItemsList items={this.state.items} />
                <Footer />
            </div>
        )
    }
}
