import * as authActions from './authActions'
import * as counterActions from './counterActions'
import * as userActions from './userActions'
import * as detalleActions from './detalleActions'


const ActionCreators = Object.assign({},
    authActions,
   counterActions,
   userActions, 
   detalleActions,

);

export default ActionCreators;
