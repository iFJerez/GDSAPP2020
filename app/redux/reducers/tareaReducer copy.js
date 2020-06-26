import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  status: 'Iniciando tareas',
  tarea_orden_asc: true,
  tarea_orden_key: 'fechaHora',
  data_detalle: [],
  data_tareas: [],
  
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case types.TAREAS_ORDEN_KEYS: {
      console.log(state.status, 'TAREAS_ORDEN_KEYS');
      return {
        ...state,
        tarea_orden_key: action.tarea_orden_key,
        status: 'Ordenando Keys',
      }
    }
    case types.TAREAS_ORDEN_ASC: {
      console.log(state.status, 'TAREAS_ORDEN_ASC');
      return {
        ...state,
        tarea_orden_asc: action.tarea_orden_asc,
        status: 'Ordenando Asc',
      }
    }
    case types.TAREA_DETALLES_GUARDA_DATA: {
      console.log(state.status, '... Guardando Tareas Detalles');
      return {
        ...state,
        data_detalle: action.data_detalle,
        status: 'Guardando Tareas Detalles',
      }
    }
    case types.TAREA_SAVE: {
      console.log('TAREA_SAVE');
      const newState = state.data_tareas.filter(v => (
          !(action.objecion.id_sku === v.id_sku &&
          action.objecion.indicador === v.indicador &&
          action.objecion.id_sala === v.id_sala &&
          action.objecion.fechaHora === v.fechaHora)
      ))

      console.log(newState);
      return {
        ...state,
        data_tareas: [...newState, action.objecion],
        status: 'Guardando Tareas ',
      }
  }
    case types.TAREA_DELETE: {
      console.log('TAREA_DELETE');
        const newState = state.data_tareas.filter(v => (
            !(action.objecion.id_sku === v.id_sku &&
            action.objecion.indicador === v.indicador &&
            action.objecion.id_sala === v.id_sala &&
            action.objecion.fechaHora === v.fechaHora)
        ))
        
        return {
          ...state,
          data_tareas: newState,
          status: 'Eliminando Tareas ',
        }
    }
    case types.ENVIO_SEND: {
      console.log('por escribir ENVIO_SEND');
      return state
        
    }

    


    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;