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
                payload: data
            });
        })
        request.catch((err) => {
            console.error(err);
        })
    }
}
