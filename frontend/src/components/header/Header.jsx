import { NavLink, useNavigate } from 'react-router-dom'
import './header.css'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'

const Header = () => {
    const { user, isAuthenticated, logout, isAdmin} = useAuth()
    const [termo, setTermo] = useState('')
    const navigate = useNavigate()
    

    const sair = () => {
        logout()
    }

    const pesquisaForm = (e) => {
        e.preventDefault()
        navigate(`/noticias?termo=${termo}`)
    }

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
            <form onSubmit={pesquisaForm}>
                <label htmlFor="search-input">Pesquisar:</label>
                <div>
                    <input onChange={(e) => setTermo(e.target.value)} id="search-input" type="search" placeholder="Noticias..." />
                    <button type='submit' aria-label="Pesquisar Conteudo"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>

            {isAuthenticated ? <div className="userMenu">
                <a className="userLog" href="">
                    <p>{user.nome}</p>
                    <i className="fa-regular fa-circle-user circulo-usuario"></i>
                </a>

                <div className="submenu">
                    <button onClick={sair}>Logout</button>
                    {isAdmin? <NavLink to={'/admin'}>Admin</NavLink> : null}
                </div>
            </div> : <NavLink className='a-login' aria-label='fazer-login' to={'/login'}>Fazer Login</NavLink>}
        </header>
    )
}

export default Header