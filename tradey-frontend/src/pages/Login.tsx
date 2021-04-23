import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    handleSubmit(e: any) {
        e.preventDefault();
        if(!this.state.email || !this.state.password)
            return;
        axios.post("http://localhost:3000/login", {
            username: this.state.email,
            password: this.state.password,
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
        e.target.reset();
    }

    handleChange(e: any) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    clearData() {
        this.setState({ email: '', password: '' })
    }

    render() {
        return (
            <div className="login-signup">
                <div className="bg-dim"></div>
                <div className="login-signup-form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="email" placeholder="e-mail" value={this.state.email} onChange={this.handleChange} />
                        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
