import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import HeaderT from './components/Header';
import Erro from './pages/Erro';

const Routes=()=>{
    return(
        <BrowserRouter>
        {/** exact={true} ou switch para chaamr apenas uma rota por vez */}
          {/**exact tbm serve para permitir o acesso somente se for escrito identico ao nome da rota */}
          <HeaderT/>
          <Switch>
             <Route exact path='/' component={Home}/>
             <Route  path='/sobre' component={Sobre}/>
             <Route path='/contato' component={Contato}/>
            <Route path='*' component={Erro}/>;
          </Switch>
          
        </BrowserRouter>
    )
}
export default Routes;