import * as authActions from './authActions'
import * as counterActions from './counterActions'
import * as salasActions from './salasActions'
import * as userActions from './userActions'
import * as tareaActions from './tareaActions'
import * as flashActions from './flashActions'
import * as desarrolloActions from './desarrolloActions'
import * as objecionesActions from './objecionesActions'


const ActionCreators = Object.assign({},
   authActions,
   counterActions,
   salasActions, 
   tareaActions,
   userActions,
   flashActions,
   desarrolloActions,
   objecionesActions,
);

export default ActionCreators;
