import React, { Component } from 'react';

class AdminContainer extends Component {
    render () {
        return (
            <div className="container">
                <h1>Admin</h1>
                <form action="/api/Agency" method="POST">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Field" aria-describedby="search-addon" />
                        <span className="input-group-addon" id="search-addon">TODO: SEARCH BUTTON ICON</span>
                    </div>
                </form>
            </div>
        )
    }
};

export default AdminContainer;