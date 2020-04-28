// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer'
import counterReducer from './counterReducer'
import userReducer from  './userReducer'
import detalleReducer from './detalleReducer'
import flashReducer from './flashReducer'
import desarrolloReducer from './desarrolloReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  counterReducer: counterReducer,
  userReducer: userReducer,
  detalleReducer: detalleReducer,
  flashReducer: flashReducer,
  desarrolloReducer: desarrolloReducer,
});

// Exports
export default rootReducer;