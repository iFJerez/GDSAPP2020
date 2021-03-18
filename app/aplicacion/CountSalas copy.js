// Imports: Dependencies
import React from 'react';

import { connect } from 'react-redux';


function Counter({ dataSala }) {
  
  let cant = null
  try {
    cant = dataSala.salas.filter(word => word.estado===0).length


    return cant>0?cant:null
  } catch (error) {
    return null
  }

}

export default  connect(state => ({   dataSala: state.userReducer.dataSala }))(Counter);