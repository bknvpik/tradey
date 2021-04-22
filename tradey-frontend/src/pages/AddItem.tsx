import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import '../styles/pages/AddItem.scss';

interface State {
    categories: any[];
    sizes: any[];
    conditions: any[];
    name: string;
    description: string;
    activeCategory: number;
    activeSize: number;
    activeCondition: number;
    images: any
}

export default class AddItem extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            categories: [],
            sizes: [],
            conditions: [],
            name: '',
            description: '',
            activeCategory: 1,
            activeSize: 1,
            activeCondition: 1,
            images: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e: any) {
        console.log(this.state.images);
        axios.post("http://localhost:3000/add-item", {
            name: this.state.name,
            description: this.state.description,
            createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
            category: this.state.activeCategory,
            size: this.state.activeSize,
            condition: this.state.activeCondition,
            user: 1
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
        e.preventDefault();
    };

    handleChange(e: any) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/add-item`)
        .then(res => {
          const categories = res.data.categories;
          const conditions = res.data.conditions;
          const sizes = res.data.sizes;
          this.setState({ categories: categories, conditions: conditions, sizes: sizes });
        })
    }
    render() {
        return (
            <div className="add-item">
                <div className="header">
                    <h1>Add New Item</h1>
                </div>
                <form className="add-item-form" onSubmit={this.handleSubmit}>
                    <input id="1" accept=".jpeg, .png" type="file" />
                    <input id="2" accept=".jpeg, .png" type="file" />
                    <input id="3" accept=".jpeg, .png" type="file" />
                    <input id="4" accept=".jpeg, .png" type="file" />
                    <input type="text" name="name" placeholder="name" onChange={this.handleChange}></input>
                    <textarea name="description" placeholder="description" onChange={this.handleChange}></textarea>
                    <div className="select-wrapper">
                        <select name="activeCategory" className="categories-select" onChange={this.handleChange}>
                            {this.state.categories.map((cat) =>
                                <option value={cat.id} key={cat.id}>{cat.category}</option>
                            )}
                        </select>
                        <select name="activeSize" className="sizes-select" onChange={this.handleChange}>
                            {this.state.sizes.map((size) =>
                                <option value={size.id} key={size.id}>{size.size}</option>
                            )}
                        </select>
                        <select name="activeCondition" className="conditions-select" onChange={this.handleChange}>
                            {this.state.conditions.map((cond) =>
                                <option value={cond.id} key={cond.id}>{cond.condition}</option>
                            )}
                        </select>
                    </div>
                    <input type="submit" value="Add Item"></input>
                </form>
                <Footer />
            </div>
        )
    }
}
