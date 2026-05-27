import './header.css'

const Header = () => {
    return (
        <header>
            <h2>Portal</h2>
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
                <label htmlFor="search-input">Pesquisar</label>
                <input id="search-input" type="search" placeholder="Pesquisar" />
                <button aria-label="Pesquisar Conteudo"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </header>
    )
}

export default Header