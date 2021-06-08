import { Component } from 'react';
import http from '../http-common';
import Footer from '../components/Footer';
import '../styles/pages/AddItem.scss';

interface State {
    userId: string;
    categories: any[];
    sizes: any[];
    conditions: any[];
    name: string;
    description: string;
    activeCategory: number;
    activeSize: number;
    activeCondition: number;
    messages: string;
    images: any;
}

export default class AddItem extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            userId: '',
            categories: [],
            sizes: [],
            conditions: [],
            name: '',
            description: '',
            activeCategory: 1,
            activeSize: 1,
            activeCondition: 1,
            messages: '',
            images: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearData = this.clearData.bind(this);
        this.selectFile = this.selectFile.bind(this);
    }
    
    handleSubmit(e: any) {
        e.preventDefault();
        if(!this.state.name || !this.state.description) {
            this.setState({messages: 'fields cannot be empty.'})
            return;
        }
        else {
            let formData = new FormData();
            formData.append('name', this.state.name);
            formData.append('description', this.state.description);
            formData.append('createdAt', new Date().toISOString().slice(0, 19).replace('T', ' '));
            formData.append('category', this.state.activeCategory.toString());
            formData.append('size', this.state.activeSize.toString());
            formData.append('condition', this.state.activeCondition.toString());
            formData.append('user', this.state.userId);
            for(let i = 0; i < this.state.images.length; i++)
                formData.append('images', this.state.images[i], this.state.images[i].name);
            
            http.post('/add-item', formData, {
            }).then(res => {
                this.setState({messages: 'Item added succesfully!'});
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
        }
        this.clearData();
        e.target.reset();
    };

    selectFile(e: any) {
        this.setState({images: [...this.state.images, ...e.target.files]}, () => console.log(this.state.images))
    }

    handleChange(e: any) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    clearData() {
        this.setState({
            ...this.state,
            userId: '',
            name: '',
            description: '',
            activeCategory: 1,
            activeSize: 1,
            activeCondition: 1,
        })
    }

    componentDidMount() {
        http.get(`/add-item`, {withCredentials: true})
        .then(res => {
            const userId = res.data.user.sub;
            const categories = res.data.categories;
            const conditions = res.data.conditions;
            const sizes = res.data.sizes;
            this.setState({ userId: userId, categories: categories, conditions: conditions, sizes: sizes });
        })
    }
    render() {
        return (
            <div className="add-item">
                <div className="header">
                    <h1>Add New Item</h1>
                </div>
                <form className="add-item-form" onSubmit={this.handleSubmit}>
                    <div className="image-inputs">
                        <label className="custom-file-upload">
                            <div>upload images</div>
                            <input type="file" multiple name="images" accept="image/*" onChange={this.selectFile}/>
                        </label> 
                    </div>
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
                <div className="messages">
                    {this.state.messages ? this.state.messages : null}
                </div>
                <Footer />
            </div>
        )
    }
}