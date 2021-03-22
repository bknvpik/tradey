import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div className="login-signup">
                <div className="bg-dim"></div>
                <div className="login-signup-form">
                    <form>
                        <input type="text" name="email" placeholder="e-mail" />
                        <input type="password" name="password" placeholder="password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
