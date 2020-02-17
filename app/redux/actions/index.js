import * as authActions from './authActions'
import * as counterActions from './counterActions'
import * as userActions from './userActions'


const ActionCreators = Object.assign({},
    authActions,
   counterActions,
   userActions, 

);

export default ActionCreators;
