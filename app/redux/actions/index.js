import * as authActions from './authActions'
import * as counterActions from './counterActions'
import * as userActions from './userActions'
import * as tareaActions from './tareaActions'
import * as salasActions from './salasActions'
import * as flashActions from './flashActions'
import * as desarrolloActions from './desarrolloActions'
import * as objecionesActions from './objecionesActions'


const ActionCreators = Object.assign({},
   authActions,
   counterActions, 
   tareaActions,
   userActions,
   flashActions,
   desarrolloActions,
   objecionesActions,
   salasActions,
);

export default ActionCreators;
