
// Imports: Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';

// Imports: Screens
import Aplicacion from './app/aplicacion/Aplicacion'
import FlashMessage from "react-native-flash-message"



// Imports: Redux Persist Persister
import { store, persistor } from './app/redux/store/store';

// React Native: App
export default App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate 
        loading={null}
        persistor={persistor}
      >
       
        <Aplicacion />
        <FlashMessage />
        
      </PersistGate>
    </Provider>
  );
};