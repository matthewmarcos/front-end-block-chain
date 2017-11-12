import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import AgencyContainer from './containers/AgencyContainer';
import AdminContainer from './containers/AdminContainer';
import IndexContainer from './containers/IndexContainer';
import PapaContainer from './containers/PapaContainer';
import NotFound from './containers/404';
import { Provider } from 'react-redux';

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
    }

    render() {
        return (
            <Provider key="provider" store={store}>
                <BrowserRouter>
                    <PapaContainer>
                        <nav className="navbar navbar-default">
                            <div className="nav-container">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="#">
                                        <span>PROJECT NARRA</span>
                                    </a>
                                    <p className="navbar-text">Government Transactions</p>
                                </div>
                            </div>
                        </nav>
                        <Switch>
                            <Route exact path="/"><IndexContainer /></Route>
                            <Route path="/admin"><AdminContainer /></Route>
                            <Route path="/agency"><AgencyContainer /></Route>
                            <Route component={NotFound} />
                        </Switch>
                    </PapaContainer>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
// export default connect(store => {
    // return {
        // citizens: store.citizens,
        // agency: store.agency
    // };
// })(App);
