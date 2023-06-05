import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './userReduscer';
import {productReducer} from './productReducer';
import { emailReducer } from './emailReducer'; 
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    products: productReducer,
    user: userReducer,
    emails: emailReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))