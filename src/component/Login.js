import React from 'react'
import { Link } from 'react-router-dom'



class Login extends React.Component {
constructor(props){
    super(props);

    this.signIn = this.signIn.bind(this);
}

 signIn(event) {
    console.log(`${this.props.email} , ${this.props.password}`);
};
    render() {
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign In</h1>
                            <p className="text-xs-center">
                                <Link to="/register">Need an account?</Link>
                            </p>

                            <form onSubmit={this.signIn}>
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input className="form-control form-control-lg" type="email" placeholder="Email" value={this.props.email} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input className="form-control form-control-lg" type="password" placeholder="Password" value={this.props.password} />
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

export default Login;


















