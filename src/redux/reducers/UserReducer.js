const InitialState = {
    user : '',
};

export const UserReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'LOG_IN': {
            const { username } = action.payload;
            return {
                ...state,
                user: username,
            };
        }
        break;
        case 'LOG_OUT': {
            return {
                ...state,
                user: '',
            };
        }
        break;
    }

    return {
        ...state
    };
}

