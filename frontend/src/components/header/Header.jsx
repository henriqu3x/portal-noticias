import { NavLink } from 'react-router-dom'
import './header.css'
import {useAuth} from '../../context/AuthContext'

const Header = () => {
    const {user, isAuthenticated} = useAuth()

    return (
        <header>
            <NavLink to={'/'}><h2>F5</h2></NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/noticias-recentes'} aria-label="Noticias-recentes">Noticias recentes</NavLink>
                    </li>
                </ul>
            </nav>
            <form>
                <label htmlFor="search-input">Pesquisar:</label>
                <div>
                    <input id="search-input" type="search" placeholder="Noticias..." />
                    <button aria-label="Pesquisar Conteudo"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>

            {isAuthenticated ? <a className="userLog" href="">
                <p>{user.nome}</p>
                <i className="fa-regular fa-circle-user circulo-usuario"></i>
            </a> : <NavLink className='a-login' aria-label='fazer-login' to={'/login'}>Fazer Login</NavLink>}
        </header>
    )
}

export default Header