import * as authActions from './authActions'
import * as counterActions from './counterActions'
import * as userActions from './userActions'
import * as detalleActions from './detalleActions'
import * as flashActions from './flashActions'


const ActionCreators = Object.assign({},
    authActions,
   counterActions,
   userActions, 
   detalleActions,
   flashActions,

);

export default ActionCreators;
