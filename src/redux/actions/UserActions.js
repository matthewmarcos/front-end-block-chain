export function login(username) {
    return {
        type: 'LOG_IN',
        payload: { username }
    };
}
