import axios from 'axios'

export function createCitizen(id, firstName, middleName, lastName) {
    const request = axios.post('/api/Citizen');

    return (dispatch) => {
        dispatch({
            type: 'CREATING_CITIZEN'
        });

        request.then((res) => {
            console.log(res);
        })
        request.catch((err) => {
            console.log(res);
        })
    }
}
