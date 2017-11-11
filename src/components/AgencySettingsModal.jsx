import React, { Component } from 'react';

class AgencySettingsModal extends Component {
    render () {
        return (
            <div>
                <div className="modal" id="modal-target" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h2>ADD FIELD</h2>
                                <div className="form-group">
                                    <label for="field-metadata">Field Metadata Key</label>
                                    <input type="text" className="form-control" id="field-metadata" placeholder="Enter Field Metadata Key" />
                                </div>
                                <div className="form-group">
                                    <label for="field-type">Field Type</label>
                                    <input type="text" className="form-control" id="field-type" placeholder="Enter Field Type" />
                                </div>

                                <h2>SHARE FIELD</h2>
                                <div className="form-group">
                                    <label for="field-metadata">Agency Name</label>
                                    <input type="text" className="form-control" id="field-metadata" placeholder="Enter Agency Name" />
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