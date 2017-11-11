import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login as LOGIN } from '../redux/actions/UserActions';
// Avoid namespace issue


class IndexContainer extends Component {

    login(e) {
        e.preventDefault();
        console.log('logging in as: ' + e.target.username.value)
        const { dispatch } = this.props;
        dispatch(LOGIN(e.target.username.value))
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Login</h4>
                        <form onSubmit={this.login.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input name="username" type="text" className="form-control" id="username" placeholder="Enter username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" />
                            </div>
                            <input className="btn btn-primary" type="submit" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(store => {
    return {
        //return list of possible logins. Tapos bawal mag login if not here
    };
})(IndexContainer);
