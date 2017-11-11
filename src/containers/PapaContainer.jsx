import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as adminActions from '../redux/actions/AdminActions';

class PapaContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(adminActions.fetchCitizens());
        dispatch(adminActions.fetchAgencies());
    };

    render() {
        return (
            <div>
                { this.props.children || 'PapaConainer' }
            </div>
        );
    }
}


export default connect(store => {
    return {
        citizens: store.citizens,
        agency: store.agency
    };
})(PapaContainer);
