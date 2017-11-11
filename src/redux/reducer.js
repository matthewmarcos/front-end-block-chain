import { combineReducers  } from 'redux';

import { AgencyReducer } from './reducers/AgencyReducer';
import { CitizenReducer }  from './reducers/CitizenReducer';
import { UserReducer } from './reducers/UserReducer';

const reducers = combineReducers({
    citizens: CitizenReducer,
    agency: AgencyReducer,
    user: UserReducer
});

export default reducers;
