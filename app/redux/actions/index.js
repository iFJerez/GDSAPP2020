import * as authActions from './authActions'
import * as counterActions from './counterActions'
import * as userActions from './userActions'
import * as detalleActions from './detalleActions'
import * as flashActions from './flashActions'
import * as desarrolloActions from './desarrolloActions'


const ActionCreators = Object.assign({},
   authActions,
   counterActions,
   userActions, 
   detalleActions,
   flashActions,
   desarrolloActions,
);

export default ActionCreators;
