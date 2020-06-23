import * as types from '../redux_constants'; 

// Initial State
const initialState = []
const envioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ENVIO_SAVE: {
            const newState = state.filter(v => (
                !(action.objecion.id_sku === v.id_sku &&
                action.objecion.indicador === v.indicador &&
                action.objecion.id_sala === v.id_sala &&
                action.objecion.fechaHora === v.fechaHora)
            ))
            return [...newState, action.objecion]
        }
        case types.ENVIO_DELETE: {
            const newState = state.filter(v => (
                !(action.objecion.id_sku === v.id_sku &&
                action.objecion.indicador === v.indicador &&
                action.objecion.id_sala === v.id_sala &&
                action.objecion.fechaHora === v.fechaHora)
            ))
            return newState
        }
        case types.ENVIO_SEND: {
           return state
            .map (v => ({...v, status: 'enviado'}))
        }
        default: {
            return state;
        }
            
    }
    
}


export default envioReducer;