// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer'
import counterReducer from './counterReducer'
import userReducer from  './userReducer'
import tareaReducer from  './tareaReducer'
import salasReducer from  './salasReducer'
import flashReducer from './flashReducer'
import desarrolloReducer from './desarrolloReducer'
import envioReducer from './envioReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  counterReducer: counterReducer,
  userReducer: userReducer,
  salasReducer: salasReducer,
  tareaReducer: tareaReducer,
  flashReducer: flashReducer,
  desarrolloReducer: desarrolloReducer,
  envioReducer: envioReducer,
});

// Exports
export default rootReducer;