import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAgency } from '../redux/actions/AdminActions'

class AdminContainer extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    createAgency(e) {
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;

        const { dispatch } = this.props;
        if(id && name) { //shitty form validation
            console.log(id, name)
            // dispatch(createAgency(id, name));
        }
    }

    render () {
        return (
            <div className="container">
                <h1>Admin</h1>
                <h3>ADD AGENCY</h3>
                <form onSubmit={this.createAgency.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="agency-id">Agency ID</label>
                        <input name="id" type="text" className="form-control" id="agency-id" placeholder="Enter Agency Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="agency-name">Agency Name</label>
                        <input name="name" type="text" className="form-control" id="agency-name" placeholder="Enter Agency Name" />
                    </div>
                    <input type="submit" value="Add" />
                </form>

                <ul>
                    {
                        this.props.agencies.agencies.map((agency, idx) => {
                            return (
                                <li track-by={idx}>{ agency.agencyId } - { agency.name }</li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
};

export default connect(store => {
    return {
        agencies: store.agency
    };
})(AdminContainer);
