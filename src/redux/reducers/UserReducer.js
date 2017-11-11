const InitialState = {
    user : '',
    isLoggingIn : false
};

const UserReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'LOGGING_IN': {
            return{
                ...state,
                isLoggingIn: true
            };
        }
        break;
        case 'LOGGED_IN': {
            const { user } = action.payload;
            return {
                ...state,
                user,
                isLoggingIn: false;
            };
        }
        break;
    }
}

