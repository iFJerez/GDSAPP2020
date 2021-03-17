import * as types from '../redux_constants'; 
import { COLOR_FONDO_SEMI_BLANCO } from '../../herramientas/Const';

// Initial State
const initialState = []
const envioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ENVIO_SAVE: {
            const newState = state.filter(v => (
                !(action.envio.id_sku === v.id_sku &&
                action.envio.id_indicador === v.id_indicador &&
                action.envio.id_sala === v.id_sala &&
                action.envio.fechaHora === v.fechaHora &&
                action.envio.type === v.type)
            ))
            return [...newState, action.envio]
        }
        case types.ENVIO_DELETE: {
            const newState = state.filter(v => (
                !(action.envio.id_sku === v.id_sku &&
                action.envio.id_indicador === v.id_indicador &&
                action.envio.id_sala === v.id_sala &&
                action.envio.fechaHora === v.fechaHora &&
                action.envio.type === v.type)
            ))
            return newState
        }
        case types.ENVIO_CLEAN: {
            return []
        }
        case types.ENVIO_DELETE_FOTO: {
            const newState = state.map(v => {
                if (action.envio.id_sku === v.id_sku &&
                action.envio.id_indicador === v.id_indicador &&
                action.envio.id_sala === v.id_sala &&
                action.envio.fechaHora === v.fechaHora &&
                action.envio.type === v.type) {
                    const {foto, ...envio} = v;
                    return envio
                } else {
                    return v
                }
            })
            console.log('ENVIO_DELETE_REDUCER',JSON.stringify(newState))
            return [...newState]
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