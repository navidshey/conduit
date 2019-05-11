import React from 'react';
import { Link } from 'react-router-dom';

class register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            email: "",
            password: ""
        };

        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    signUp(event) { 
        console.log(`${this.state.userName} , ${this.state.email} , ${this.state.password}`);
        event.preventDefault();
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign Up</h1>
                            <p className="text-xs-center">
                                <Link className="" to="/login">Have an account?</Link>
                            </p>

                            <form>
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Username"
                                        onChange={this.handleChange} value={this.state.userName} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input type="email" className="form-control form-control-lg" placeholder="Email"
                                        onChange={this.handleChange} value={this.state.email} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input type="password" className="form-control form-control-lg" placeholder="Password" 
                                        onChange={this.handleChange} value={this.state.password}/>
                                    </fieldset>
                                    <button className="btn btn-lg btn-primary pull-xs-right" type="submit">Sign in</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default register;