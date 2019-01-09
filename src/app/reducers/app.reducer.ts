interface State {
    isLoading: false
}
const INITIAL_STATE = {
    isLoading: false
}

export function appReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'START_LOADING':
            return {
                isLoading: true
            }
        case 'STOP_LOADING':
            return {
                isLoading: false
            }
        default:
            return state;

    }
}