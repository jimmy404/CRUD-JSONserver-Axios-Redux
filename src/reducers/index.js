import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import validacionReducer from './validacionReducers';

export default combineReducers({
    productos: productosReducer,
    error: validacionReducer
});