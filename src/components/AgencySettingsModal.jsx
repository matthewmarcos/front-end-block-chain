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
    constructor(props) {
        super(props);
        this.state = {
            value: {
                fieldMetaDataKey: '',
                type: '',
                owner: '',
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
                <div className="form-group">
                    <label htmlFor="field-metadata">Field Metadata Key</label>
                    <input type="text" className="form-control" id="field-metadata" placeholder="Enter Field Metadata Key" value={this.state.value.id} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="field-type">Field Type</label>
                    <input type="text" className="form-control" id="field-type" placeholder="Enter Field Type" value={this.state.value.id} onChange={this.handleChange} />
                </div>
                <input type="submit" className="btn btn-primary" value="Add Field" />
            </form>
        )
    }
}

class ShareFieldForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                field: '',
                agency: '',
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="field-metadata-key">Field Metadata Key</label>
                    <input type="text" className="form-control" id="field-metadata-key" placeholder="Enter Field Metadata Key to Share" value={this.state.value.field} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="agency-name">Agency Name</label>
                    <input type="text" className="form-control" id="agency-name" placeholder="Enter Agency Name" value={this.state.value.agency} onChange={this.handleChange} />
                </div>
                <input type="submit" className="btn btn-primary" value="Share Field" />
            </form>
        )
    }
}

export default AgencySettingsModal
