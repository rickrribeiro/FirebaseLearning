import authReducer from './authReducer.js'
import projectReducer from './projectReducer.js'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer


})

export default rootReducer;