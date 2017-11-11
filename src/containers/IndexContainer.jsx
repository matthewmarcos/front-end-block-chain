import React, { Component } from 'react';
import axios from 'axios';

class IndexContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Login</h4>
                        <form action="/api/Agency" method="POST">
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
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


export default IndexContainer;
