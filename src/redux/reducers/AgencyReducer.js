const InitialState = {
    isFetching: false,
    agencies: [ ],
    newAgency: {} // For add Cutuzen
};

export const AgencyReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_AGENCY': {
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
            const { agencies } = action.payload;
            return {
                ...state,
                agencies: [
                    ...agencies
                ]
            }
        }
        break;
    }

    return {
        ...state
    };
}

