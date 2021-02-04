// Imports: Dependencies
import React from 'react';

import { connect } from 'react-redux';


function Counter({ dataSala }) {
  try {
    return dataSala.salas.filter(word => word.estado===0).length
  } catch (error) {
    
  }

}

export default  connect(state => ({   dataSala: state.userReducer.dataSala }))(Counter);