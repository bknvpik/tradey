import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            repeatPassword: "",
            error: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e: any) {
        axios.post("http://localhost:3000/sign-up", {
            user: {
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                password: this.state.password,
                repeatPassword: this.state.repeatPassword
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
        e.preventDefault();
    };

    handleChange(e: any) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div className="login-signup">
                <div className="bg-dim"></div>
                <div className="login-signup-form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="email" placeholder="e-mail" value={this.state.email} onChange={this.handleChange} required />
                        <input type="text" name="firstName" placeholder="first name" value={this.state.firstName} onChange={this.handleChange} required />
                        <input type="text" name="lastName" placeholder="last name" value={this.state.lastName} onChange={this.handleChange} required />
                        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} required />
                        <input type="password" name="repeatPassword" placeholder=" repeat password" value={this.state.repeatPassword} onChange={this.handleChange} required />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
