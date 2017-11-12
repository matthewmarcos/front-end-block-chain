import React, { Component } from 'react';

class AgencySettingsModal extends Component {
    render () {
        return (
            <div>
                <div className="modal" id="modal-target-add-citizen" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Citizen</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                id: '',
                firstName: '',
                middleName: '',
                lastName: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="citizen-id">ID</label>
                        <input type="text" className="form-control" id="citizen-id" placeholder="Enter Citizen ID" value={this.state.value.id} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="citizen-first-name">First Name</label>
                        <input type="text" className="form-control" id="citizen-first-name" placeholder="Enter Citizen First Name" value={this.state.value.firstName} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="citizen-middle-name">Middle Name</label>
                        <input type="text" className="form-control" id="citizen-middle-name" placeholder="Enter Citizen Middle Name" value={this.state.value.middleName} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="citizen-last-name">Last Name</label>
                        <input type="text" className="form-control" id="citizen-last-name" placeholder="Enter Citizen Last Name" value={this.state.value.lastName} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="modal-footer">
                    <input type="submit" className="btn btn-primary" value="Save changes" />
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </form>
        )
    }
}

export default AgencySettingsModal
