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
import objecionesReducer from './objecionesReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  counterReducer: counterReducer,
  userReducer: userReducer,
  salasReducer: salasReducer,
  tareaReducer: tareaReducer,
  flashReducer: flashReducer,
  desarrolloReducer: desarrolloReducer,
  objecionesReducer: objecionesReducer,
  
});

// Exports
export default rootReducer;