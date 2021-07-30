import { DefaultRootState } from 'react-redux';
import { createStore } from 'redux';

const initialState: DefaultRootState = {
    data: {
        name: 'daniel',
        email: 'waite',
    }

}

function login(state = initialState, action: any) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                action
            }

        default:
            return state;
    }
}


export const store = createStore(login);