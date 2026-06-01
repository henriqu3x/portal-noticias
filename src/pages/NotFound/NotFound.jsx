import { NavLink } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
    return(
        <section className='notFound'>
            <div>
                <h1>404</h1>
                <h2>Pagina não Encontrada!</h2>
            </div>
            <NavLink to={'/'}>Voltar Para Pagina Inicial</NavLink>
        </section>
    )
}

export default NotFound