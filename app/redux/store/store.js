// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
//import AsyncStorage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

// Imports: Redux
import rootReducer from '../reducers/index';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'authReducer',
    'counterReducer',
    'userReducer',
    'detalleReducer'

  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [

  ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)


const logger = createLogger({
  colors: '',
});

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};