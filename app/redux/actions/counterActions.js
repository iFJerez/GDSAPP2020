import * as types from '../redux_constants'; 

// Increase Counter
export function increaseCounter() {
  return {
    type: types.INCREASE_COUNTER,
    valor: true
  }
}
// Decrease Counter
export const decreaseCounter = () => ({
  type: types.DECREASE_COUNTER,
});