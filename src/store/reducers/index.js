import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import projects from './projectReducer'
import geocodes from './geocodeReducer'

const rootReducer = combineReducers({projects, geocodes})

export default rootReducer