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
    createCitizen(e) {
        e.preventDefault();
        const citizen_id = e.target.citizen_id.value;
        const citizen_first_name = e.target.citizen_first_name.value;
        const citizen_middle_name = e.target.citizen_middle_name.value;
        const citizen_last_name = e.target.citizen_last_name.value;

        const { dispatch } = this.props;
        if(citizen_id && citizen_first_name && citizen_middle_name && citizen_last_name) { //shitty form valcitizen_nameation
            console.log(citizen_id, citizen_first_name, citizen_middle_name, citizen_last_name)
            dispatch(createCitizen(citizen_id, citizen_first_name, citizen_middle_name, citizen_last_name));
        }
    }

    render () {
        return (
            <form onSubmit={this.createCitizen.bind(this)}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="citizen-id">ID</label>
                        <input name="citizen_id" type="text" className="form-control" id="citizen-id" placeholder="Enter Citizen ID" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="citizen-first-name">First Name</label>
                        <input name="citizen_first_name" type="text" className="form-control" id="citizen-first-name" placeholder="Enter Citizen First Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="citizen-middle-name">Middle Name</label>
                        <input name="citizen_middle_name" type="text" className="form-control" id="citizen-middle-name" placeholder="Enter Citizen Middle Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="citizen-last-name">Last Name</label>
                        <input name="citizen_last_name" type="text" className="form-control" id="citizen-last-name" placeholder="Enter Citizen Last Name" />
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
