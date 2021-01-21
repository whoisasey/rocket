import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import projects from './projectReducer'

const rootReducer = combineReducers({projects})

export default rootReducer