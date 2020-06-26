import * as types from '../redux_constants'; 

// Initial State
const initialState = []
const objecionesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OBJECION_SAVE: {
            const newState = state.filter(v => (
                !(action.objecion.id_sku === v.id_sku &&
                action.objecion.indicador === v.indicador &&
                action.objecion.id_sala === v.id_sala &&
                action.objecion.fechaHora === v.fechaHora)
            ))
            return [...newState, action.objecion]
        }
        case types.OBJECION_DELETE: {
            const newState = state.filter(v => (
                !(action.objecion.id_sku === v.id_sku &&
                action.objecion.indicador === v.indicador &&
                action.objecion.id_sala === v.id_sala &&
                action.objecion.fechaHora === v.fechaHora)
            ))
            return newState
        }
        case types.OBJECION_SEND: {
           return state
            .map (v => ({...v, status: 'enviado'}))
        }
        default: {
            return state;
        }
            
    }
    
}


export default objecionesReducer;