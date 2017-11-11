import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './redux/store';
import AgencyContainer from './containers/AgencyContainer';
import AdminContainer from './containers/AdminContainer';
import IndexContainer from './containers/IndexContainer';
import NotFound from './containers/404';

class App extends Component {
    render() {
            {/*
                <Provider key="provider" store={store}>
                */}
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/"><IndexContainer /></Route>
                        <Route path="/admin"><AdminContainer /></Route>
                        <Route path="/agency"><AgencyContainer /></Route>
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
        );
            {/*
            </Provider>
                */}
    }
}


export default App;
