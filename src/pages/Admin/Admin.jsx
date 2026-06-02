import "./admin.css";
import Header from "../../components/header/Header";

const Admin = () => {
  return (
    <>
      <Header />
      <main className="pageAdmin">
        <section className="section-admin">
          <h1>Painel Admin</h1>
          <p>Gerencie todos os aspectos da plataforma</p>

          <section className="cards">
            <div className="card">
              <div className="box-text">
                <p>Total de usuarios</p>
                <h2>8</h2>
              </div>
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="card">
              <div className="box-text">
                <p>Total de noticias</p>
                <h2>5</h2>
              </div>
              <i className="fa-solid fa-book"></i>
            </div>
          </section>

          <section className="tabs">
            <div>
              <button className="active" aria-label="mostrar-usuarios">
                Usuarios
              </button>
              <button aria-label="mostrar-noticias">Noticias</button>
            </div>
          </section>

          <section className="content">
            <h2>Gerenciar Usuario/Noticia</h2>
            <div className="cardsContent">
              <button
                className="adicionarNoticias"
                aria-label="adicionar-noticias"
              >
                Adicionar Noticia
              </button>
              <div className="cardUser">
                <div className="box-info">
                  <h3>Lucas</h3>
                  <p>lucas@gmail.com</p>
                </div>
                <div>
                  <select aria-label="selecionar-perfil" name="selectPerfil" id="perfil">
                    <option value="cliente">Cliente</option>
                    <option value="admin">Admin</option>
                  </select>
                  <button aria-label="excluir-usuario">Excluir</button>
                </div>
              </div>
              <div className="cardNoticia">
                <div>
                  <h3>Title</h3>
                  <p>descricao</p>
                </div>
                <div className="box-btn">
                  <button aria-label="editar-noticia">Editar</button>
                  <button aria-label="arquivar-noticia">Arquivar</button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Admin;
