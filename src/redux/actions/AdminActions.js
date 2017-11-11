import axios from 'axios'

export function createCitizen(id, firstName, middleName, lastName) {
    const request = axios.post('/Citizen');

    return (dispatch) => {
        dispatch({
            type: 'CREATING_CITIZEN'
        });

        request.then((res) => {
            console.log(res);
        });
        request.catch((err) => {
            console.log(err);
        });
    }
}


export function fetchCitizens() {
    const request = axios.get('/Citizen');

    return dispatch => {
        dispatch({
            type: 'FETCHING_CITIZENS'
        });

        request.then(({ data }) => {
            dispatch({
                type: 'FETCHED_ALL_CITIZENS',
                payload: { citizens: data }
            });
        })
        request.catch((err) => {
            console.error(err);
        })
    }
}

export function createAgency(id, name) {
    const request = axios.post('/Agency', { agencyId: id, name });

    return (dispatch) => {
        dispatch({
            type: 'CREATING_AGENCY'
        });

        request.then((res) => {
            console.log('Done creating agency')
            console.log(res);
            dispatch(fetchAgencies());
        });
        request.catch((err) => {
            console.log(err);
        });
    }
}


export function fetchAgencies() {
    const request = axios.get('/Agency');

    return dispatch => {
        dispatch({
            type: 'FETCHING_AGENCIES'
        });

        request.then(({ data }) => {
            dispatch({
                type: 'FETCHED_ALL_AGENCIES',
                payload: {
                    agencies: data
                }
            });
        })
        request.catch((err) => {
            console.log('error fetching GET /Agency');
            console.error(err);
        })
    }
}
