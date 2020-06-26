import * as authActions from './authActions'
import * as counterActions from './counterActions'
import * as salasActions from './salasActions'
import * as userActions from './userActions'
import * as tareaActions from './tareaActions'
import * as flashActions from './flashActions'
import * as desarrolloActions from './desarrolloActions'
import * as envioActions from './envioActions'


const ActionCreators = Object.assign({},
   authActions,
   counterActions,
   salasActions, 
   tareaActions,
   userActions,
   flashActions,
   desarrolloActions,
   envioActions,
);

export default ActionCreators;
