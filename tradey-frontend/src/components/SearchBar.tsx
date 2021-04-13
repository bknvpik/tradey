import React, { Component } from 'react'
import '../styles/components/SearchBar.scss';

export default class SearchBar extends Component {
    constructor(props: any) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    state: {value: string};

    handleChange(e: any) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className="search-bar">
                <div className="bg-dim"></div>
                <div className="search-input">
                    <button type="submit" className="submit-button"><i className="fas fa-search"></i></button>
                    <input type="text" name="search" placeholder="search" value={this.state.value} onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}
