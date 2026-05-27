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
          <label htmlFor="search-input">Pesquisar</label>
          <input id="search-input" type="search" placeholder="Pesquisar"/>
          <button aria-label="Pesquisar Conteudo"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </header>
      <main>
        <section aria-label="Sessão Noticias" id="noticias">
          <aside id="noticias-laterais">
            <article>
              <img src="" alt="" />
              <h2>title</h2>
              <p>descricao</p>
            </article>
            <article>
              <img src="" alt="" />
              <h2>title</h2>
              <p>descricao</p>
            </article>
            <article>
              <img src="" alt="" />
              <h2>title</h2>
              <p>descricao</p>
            </article>
          </aside>
          <section aria-label="noticias principais" id="noticias-principais">
            <article>
              <img src="" alt="" />
              <h2>title</h2>
              <p>descricao</p>
            </article>
            <article>
              <img src="" alt="" />
              <h2>title</h2>
              <p>descricao</p>
            </article>
          </section>
        </section>
      </main>
    </>
  )
}

export default App