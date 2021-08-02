import { Action } from './nameActions'

/*
const initialState: DefaultRootState = {
    data: {
        name: '',
        email: '',
        token: '',
    },
};*/

export interface DataState {
    data: {
        name: string;
        email: string;
        token: string;
    }
}

const initialState = {
    data: {
        name: '',
        email: '',
        token: '',
    }
}

export const login = (state: DataState = initialState, action: Action) => {
    //const ok = action.payload
    console.log('ACTION: ', action);


    switch (action.type) {

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                data: {
                    ...state,
                    //action.payload
                    name: action.payload.name,
                    email: action.payload.email,
                    token: action.payload.token,
                }
            }
        /*
        data: {
            name: action.data.name,
            email: action.data.email,
            token: action.data.token,
        },*/
        default:
            return state;
    }
}


//export const store = createStore(login);