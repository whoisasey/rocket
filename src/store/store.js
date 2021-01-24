import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../store/reducers/index'
import projects from './data/projects'
import geocodes from './data/geocodes'

//create object for default data
const defaultState = {
	projects,
	geocodes
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk))

export default store