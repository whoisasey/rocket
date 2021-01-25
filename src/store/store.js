import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../store/reducers/index'
import projects from './data/projects'

//create object for default data
export const defaultState = {
	projects,
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk))

export default store