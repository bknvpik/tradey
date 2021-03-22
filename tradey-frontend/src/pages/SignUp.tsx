import React, { Component } from 'react';

export default class SignUp extends Component {
    render() {
        return (
            <div className="login-signup">
                <div className="bg-dim"></div>
                <div className="login-signup-form">
                    <form>
                        <input type="text" name="email" placeholder="e-mail" />
                        <input type="text" name="first-name" placeholder="first name" />
                        <input type="text" name="last-name" placeholder="last name" />
                        <input type="password" name="password" placeholder="password" />
                        <input type="password" name="repeat-password" placeholder=" repeat password" />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
