import {syncHistoryWithStore} from 'react-router-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../store/reducers/index'
import projects from './data/projects'

//create object for default data
const defaultState = {
	projects,
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk))


export default store