import * as types from '../redux_constants'; 

// Initial State
const initialState = {
    numero: 0,
  };
  
// Reducers (Modifies The State And Returns A New State)
const desarrolloReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case types.DESARROLLO_INCREMENT: {
      console.log('DESARROLLO_INCREMENT');
      return {
        // State
        ...state,
        // Redux Store
        numero: state.numero + action.numero,
      }
    }
    case types.DESARROLLO_DECREMENT: {
      console.log('DESARROLLO_DECREMENT')
      return {
        // State
        ...state,
        // Redux Store
        numero: state.numero - action.numero,
      }
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default desarrolloReducer;