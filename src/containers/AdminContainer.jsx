import React, { Component } from 'react';

class AdminContainer extends Component {
    render () {
        return (
            <div className="container">
                <h1>Admin</h1>
                <h3>ADD AGENCY</h3>
                <form action="/api/Agency" method="POST">
                    <div className="form-group">
                        <label for="agency-id">Agency ID</label>
                        <input type="text" className="form-control" id="agency-id" placeholder="Enter Agency Name" />
                    </div>    
                    <div className="form-group">
                        <label for="agency-name">Agency Name</label>
                        <input type="text" className="form-control" id="agency-name" placeholder="Enter Agency Name" />
                    </div>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
};

export default AdminContainer;