import * as types from '../redux_constants'; 

// Initial State
const initialState = {
    counter: 0,
  };
  
// Reducers (Modifies The State And Returns A New State)
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case types.INCREASE_COUNTER: {
      console.log('INCREASE_COUNTER');
      return {
        // State
        ...state,
        // Redux Store
        counter: state.counter + 1,
      }
    }

    // Decrease Counter
    case types.DECREASE_COUNTER: {
      console.log('DECREASE_COUNTER');
      return {
        // State
        ...state,
        // Redux Store
        counter: state.counter - 1,
      }
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default counterReducer;