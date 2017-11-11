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
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="citizen-id">ID</label>
                                    <input type="text" className="form-control" id="citizen-id" placeholder="Enter Citizen ID" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="citizen-first-name">First Name</label>
                                    <input type="text" className="form-control" id="citizen-first-name" placeholder="Enter Citizen First Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="citizen-middle-name">Middle Name</label>
                                    <input type="text" className="form-control" id="citizen-middle-name" placeholder="Enter Citizen First Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="citizen-last-name">Last Name</label>
                                    <input type="text" className="form-control" id="citizen-last-name" placeholder="Enter Citizen First Name" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AgencySettingsModal
