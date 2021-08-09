const initialState={
    titulo:'ti',
    descricao:'des',
    id:0
   };
 const UsuarioReducers = (state=initialState,action)=>{
     switch(action.type){
         case 'SET_NAME':
             return { ...state,
                 titulo:action.payload.titulo,
                 descricao:action.payload.descricao,
                 id:action.payload.id
                
                };
             break;
         default:    
     }
     return state;
 };
 export default UsuarioReducers;