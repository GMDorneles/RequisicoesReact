import {Link} from 'react-router-dom';
export default function Erro(){
    return(
      <div>
          <h1>Essa pag não existe</h1>
          <br/>
          <Link to='/'>Home</Link>
          <br/>
          <Link to='/contato'>Contato</Link>
      </div>
    );
  }