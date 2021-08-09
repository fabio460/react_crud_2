import { combineReducers } from 'redux';
import UsuarioReducers  from './UsuarioReducers';
export default combineReducers({
    usuario: UsuarioReducers
});