import { createStore } from 'redux'
import { login } from './LoginReducer'

export const store = createStore(login)