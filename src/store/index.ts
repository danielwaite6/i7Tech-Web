import { DefaultRootState } from 'react-redux';
import { createStore } from 'redux';

import { ActionsLoginSuccess } from './nameActions'


const initialState: DefaultRootState = {
    data: {
        name: '',
        email: '',
        token: '',
    },
};

function login(state = initialState, action: ActionsLoginSuccess) {


    switch (action.type) {

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                data: {
                    name: action.data.name,
                    email: action.data.email,
                    token: action.data.token,
                },


            }

        default:
            return state;
    }
}


export const store = createStore(login);