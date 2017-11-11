import React, { Component } from 'react';
import CitizenCard from '../components/CitizenInfoCard';
import AgencyModal from '../components/AgencySettingsModal';

class AgencyContainer extends Component {
    render () {
        return (
            <div className="container">
                <h1>Agency</h1>
                
                <button type="button" className="btn btn-primary" id="modal-trigger" data-toggle="modal" data-target="#modal-target">
                    TODO OPEN SETTINGS
                </button>
                
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Field" aria-describedby="search-addon" />
                    <span className="input-group-addon" id="search-addon">TODO: SEARCH BUTTON ICON</span>
                </div>

                <div className="row citizen-list">
                    <CitizenCard />
                    <CitizenCard />
                    <CitizenCard />
                    <CitizenCard />
                    <CitizenCard />
                </div>

                <AgencyModal />
            </div>
        )
    }
};

export default AgencyContainer;
