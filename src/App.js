
import './App.css';
import TelaDeFormulario from './TelaDeFormulario';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Cadastro from './TelaDeFormulario/cadastro';
import Atualizar from './TelaDeFormulario/atualizar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
         <Link to='/'>
         
         </Link>
         <Link to='/cadastro'>
         
         </Link>
         <Link to='/atualizar'>
         
         </Link>
         <Switch>
           <Route exact path='/'>
             <TelaDeFormulario/>
           </Route>
           <Route path='/cadastro'>
             <Cadastro/>
           </Route>
           <Route path='/atualizar'>
             <Atualizar/>
           </Route>
         </Switch>
    </BrowserRouter>   
    </div>
  );
}

export default App;
