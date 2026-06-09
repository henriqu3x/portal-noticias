import "./admin.css";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import { useEffect, useState } from "react";
import { useAuth } from '../../context/AuthContext'
import api from "../../services/api";

const Admin = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modeModal, setModeModal] = useState(null)

  const [usuarios, setUsuarios] = useState([])
  const [noticias, setNoticias] = useState([])
  const [error, setError] = useState('')
  const [tab, setTab] = useState('usuarios')

  const [noticiaSelecionada, setNoticiaSelecionada] = useState(null)

  const { user } = useAuth()

  const estadoModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    const buscarApi = async () => {
      try {
        const users = await api.get('/usuarios')
        const news = await api.get('/admin/noticias')

        setUsuarios(users.data)
        setNoticias(news.data)

        console.log(users)
        console.log(news)
      } catch (error) {
        setError(error.response?.data)
      }
    }

    buscarApi()
  }, [])

  const mudarPerfil = async (id, perfil) => {
    try {
      const status = perfil
      const response = await api.patch(`/usuarios/${id}`, {
        status
      })

      setUsuarios((prev) =>
        prev.map((u) =>
          u.id === id ? { ...u, perfil } : u
        )
      )
    } catch (error) {
      console.log(error.response?.data)
    }
  }

  const deletarUsuario = async (id) => {
    try {
      const response = await api.delete(`/usuarios/${id}`)

      setUsuarios((prev) =>
        prev.filter((u) =>
          u.id !== id
        )
      )
    } catch (error) {
      console.log(error.response?.data)
    }
  }

  const adicionarEditarNoticia = async (id, titulo, descricao, imagemUrl, imagemAlt, conteudo, status, mode) => {
    const usuarioId = user.id

    if (mode == 'add') {
      try {
        const response = await api.post('/noticias', {
          titulo,
          descricao,
          imagemUrl,
          imagemAlt,
          conteudo,
          status,
          usuarioId
        })

        console.log(response.data)

        setNoticias(prev => [...prev,response.data])
      } catch (error) {
        console.log(error.response?.data)
      }
    } else {
      try {
        const response = await api.put(`/noticias/${id}`, {
          titulo,
          descricao,
          imagemUrl,
          imagemAlt,
          conteudo,
          status
        })

        console.log(response.data)

        setNoticias(prev => prev.map(n =>
          n.id == id ? response.data : n
        ))
      } catch (error) {
        console.log(error.response?.data)
      }
    }
  }

  const mudarStatusNoticia = async (id, sts) => {
    let status = true

    if (sts) {
      status = false
    } else {
      status = true
    }

    try {
      const response = await api.patch(`noticias/${id}`, {
        status
      })

      console.log(response.data)

      setNoticias(prev => 
        prev.map(n =>
          n.id == id ? {...n, status: response.data.status} : n
        )
      )
    } catch (error) {
      console.log(error.response?.data)
    }
  }

  return (
    <>
      <Header />
      {openModal ? <Modal onClose={() => setOpenModal(false)} mode={modeModal} onSubmit={adicionarEditarNoticia} noticia={noticiaSelecionada} /> : null}
      <main className="pageAdmin">
        <section className="section-admin">
          <h1>Painel Admin</h1>
          <p>Gerencie todos os aspectos da plataforma</p>

          <section className="cards">
            <div className="card">
              <div className="box-text">
                <p>Total de usuarios</p>
                <h2>{usuarios.length}</h2>
              </div>
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="card">
              <div className="box-text">
                <p>Total de noticias</p>
                <h2>{noticias.length}</h2>
              </div>
              <i className="fa-solid fa-book"></i>
            </div>
          </section>

          <section className="tabs">
            <div>
              <button className={tab == 'usuarios' ? 'active' : ''} aria-label="mostrar-usuarios" onClick={() => setTab('usuarios')}>
                Usuarios
              </button>
              <button className={tab == 'noticias' ? 'active' : ''} aria-label="mostrar-noticias" onClick={() => setTab('noticias')}>Noticias</button>
            </div>
          </section>

          <section className="content">
            <h2>Gerenciar {tab == 'usuarios' ? 'Usuarios' : 'Noticias'}</h2>
            <div className="cardsContent">
              {tab == 'noticias' ? <button
                className="adicionarNoticias"
                aria-label="adicionar-noticias"
                onClick={() => {
                  setModeModal('add')
                  estadoModal()
                }}
              >
                Adicionar Noticia
              </button> : null}

              {tab == 'usuarios' ? usuarios.map((u) => {
                return (
                  <div className="cardUser" key={u.id}>
                    <div className="box-info">
                      <h3>{u.nome}</h3>
                      <p>{u.email}</p>
                    </div>
                    <div>
                      <select aria-label="selecionar-perfil" name="selectPerfil" id="perfil" value={u.perfil} onChange={(e) => mudarPerfil(u.id, e.target.value)}>
                        <option value="cliente">Cliente</option>
                        <option value="admin">Admin</option>
                      </select>
                      <button aria-label="excluir-usuario" onClick={() => deletarUsuario(u.id)}>Excluir</button>
                    </div>
                  </div>
                )
              }) : noticias.length > 0 ? noticias.map((n) => {
                return (
                  <div className="cardNoticia" key={n.id}>
                    <div>
                      <h3>{n.titulo}</h3>
                      <p>{n.descricao}</p>
                    </div>
                    <div className="box-btn">
                      <button aria-label="editar-noticia" onClick={() => {
                        setModeModal('att')
                        estadoModal()
                        setNoticiaSelecionada(n)
                      }}>Editar</button>
                      <button aria-label="arquivar-noticia" onClick={(e) => mudarStatusNoticia(n.id, n.status)}>{n.status == true? 'Arquivar':'Desarquivar'}</button>
                    </div>
                  </div>
                )
              }) : <p>Nenhuma noticia encontrada</p>}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Admin;
