import { NavLink } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
    return(
        <main className='notFound'>
            <div>
                <h1>404</h1>
                <h2>Pagina não Encontrada!</h2>
            </div>
            <NavLink aria-label='voltar para pagina inicial' to={'/'}>Voltar Para Pagina Inicial</NavLink>
        </main>
    )
}

export default NotFound