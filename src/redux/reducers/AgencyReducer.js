const InitialState = {
    isFetching: false,
    citizens: [ ],
    newCitizen: {} // For add Cutuzen
};

export const AgencyReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_AGENCY': {
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
        case 'FETCHED_ALL_AGENCIES': { 
        }
        break;
    }

    return {
        ...state
    };
}

