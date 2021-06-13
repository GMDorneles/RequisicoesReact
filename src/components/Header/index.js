import {Link} from 'react-router-dom';
export default function HeaderT(){
    return(
        <header>
            <h2>
                Header da pag
            </h2>
            <br/>
            <Link to='/contato'>Contatos</Link>
        </header>
    )
}