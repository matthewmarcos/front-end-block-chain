import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect  } from 'react-router';
import AgencyContainer from './containers/AgencyContainer';
import AdminContainer from './containers/AdminContainer';
import IndexContainer from './containers/IndexContainer';


class App extends Component {
    render() {
        return (<IndexContainer/>);
    }
}


export default App;
