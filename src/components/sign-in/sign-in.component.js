import React, { Component } from 'react';

import FromInput from '../../components/form-input/form-input.component';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            emai: '',
            password: '',
        })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {

        const {email, password} = this.state;

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FromInput 
                        name="email" 
                        type="email"
                        handleChange={this.handleChange} 
                        value={email}
                        label="email"
                        required />
                    <FromInput 
                        name="password" 
                        type="password"
                        handleChange={this.handleChange} 
                        value={password}
                        label="password"
                        required/>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }

}