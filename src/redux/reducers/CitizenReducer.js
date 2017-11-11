const InitialState = {
    citizens: [ ],
    newCitizen: {} // For add Cutuzen
};

const CitizenReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'RECEIVE_CREATE_NEW': {
            // const { id, firstName, middleName, lastName } = action.payload.user;
            const { user } = action.payload;A
            return {
                ...state,
                citizens: [
                    ...state.citizens,
                    user
                ]
            }
        }
    }
}

