import './header.css'

const Header = () => {
    return (
        <header>
            <h2>F5</h2>
            <nav>
                <ul>
                    <li>
                        <a href="" aria-label="Noticias-recentes">Noticias recentes</a>
                    </li>
                    <li>
                        <a href="" aria-label="Principais-noticias">Principais noticias</a>
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
        </header>
    )
}

export default Header