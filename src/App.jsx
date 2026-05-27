const App = () => {
  return(
    <>
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
          <input type="text" placeholder="Pesquisar"/>
          <button aria-label="Pesquisar Conteudo"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </header>
    </>
  )
}

export default App