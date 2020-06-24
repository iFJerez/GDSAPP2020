import * as types from '../redux_constants'; 

// Initial State
const initialState = []
const envioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ENVIO_SAVE: {
            const newState = state.filter(v => (
                !(action.envio.id_sku === v.id_sku &&
                action.envio.indicador === v.indicador &&
                action.envio.id_sala === v.id_sala &&
                action.envio.fechaHora === v.fechaHora)
            ))
            return [...newState, action.envio]
        }
        case types.ENVIO_DELETE: {
            const newState = state.filter(v => (
                !(action.envio.id_sku === v.id_sku &&
                action.envio.indicador === v.indicador &&
                action.envio.id_sala === v.id_sala &&
                action.envio.fechaHora === v.fechaHora)
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