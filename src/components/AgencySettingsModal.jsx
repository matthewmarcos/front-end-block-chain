import React, { Component } from 'react';

class AgencySettingsModal extends Component {
    render () {
        return (
            <div>
                <div className="modal" id="modal-target" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Settings</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <h2>ADD FIELD</h2>
                                    <AddFieldForm />
                                </div>

                                <br />

                                <div className="container">
                                    <h2>SHARE FIELD</h2>
                                    <ShareFieldForm />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class AddFieldForm extends Component {
    createField(e) {
        e.preventDefault();
        const field_key = e.target.field_key.value;
        const field_type = e.target.field_type.value;

        const { dispatch } = this.props;
        if(field_key && field_type) { //shitty form valfield_keyation
            console.log(field_key, field_type)
            // dispatch(createField(field_key, field_type));
        }
    }

    render () {
        return (
            <form onSubmit={this.createField.bind(this)}>
                <div className="form-group">
                    <label htmlFor="field-metadata">Field Metadata Key</label>
                    <input name="field_key" type="text" className="form-control" id="field-metadata" placeholder="Enter Field Metadata Key"/>
                </div>
                <div className="form-group">
                    <label htmlFor="field-type">Field Type</label>
                    <input name="field_type" type="text" className="form-control" id="field-type" placeholder="Enter Field Type"/>
                </div>
                <input type="submit" className="btn btn-primary" value="Add Field" />
            </form>
        )
    }
}

class ShareFieldForm extends Component {
    setFieldPermission(e) {
        e.preventDefault();
        const field_key = e.target.field_key.value;
        const agency_name = e.target.agency_name.value;

        const { dispatch } = this.props;
        if(field_key && agency_name) { //shitty form valfield_keyation
            console.log(field_key, agency_name)
            // dispatch(setFieldPermission(field_key, agency_name));
        }
    }

    render () {
        return(
            <form onSubmit={this.setFieldPermission.bind(this)}>
                <div className="form-group">
                    <label htmlFor="field-metadata-key">Field Metadata Key</label>
                    <input name="field_key" type="text" className="form-control" id="field-metadata-key" placeholder="Enter Field Metadata Key to Share" />
                </div>
                <div className="form-group">
                    <label htmlFor="agency-name">Agency Name</label>
                    <input name="agency_name" type="text" className="form-control" id="agency-name" placeholder="Enter Agency Name" />
                </div>
                <input type="submit" className="btn btn-primary" value="Share Field" />
            </form>
        )
    }
}

export default AgencySettingsModal
