const InitialState = {
    isFetching: false,
    citizens: [ ],
    newCitizen: {} // For add Cutuzen
};

export const CitizenReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_CITIZEN': {
            // const { id, firstName, middleName, lastName } = action.payload.user;
            const { user } = action.payload;
            return {
                ...state,
                citizens: [
                    ...state.citizens,
                    user
                ]
            }
        }
        break;
        case 'FETCHED_ALL_CITIZENS': {

        }
    }

    return {
        ...state
    };
};

