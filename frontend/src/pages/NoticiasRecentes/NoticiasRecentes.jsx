import './noticiasRecentes.css'
import Header from '../../components/header/Header'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { NavLink } from 'react-router-dom'

const NoticiasRecentes = () => {
    const [noticias, setNoticia] = useState([])

    useEffect(() => {
        const buscarNoticias = async () => {
            try {
                const response = await api.get('/noticias')

                setNoticia(response.data)
            } catch (error) {
                console.log(error.response?.data)
            }
        }

        buscarNoticias()
    }, [])

    return (
        <>
            <Header />
            <main className='noticias-recentes'>
                <section className='section-noticias-recentes'>
                    <h1>Noticias Recentes</h1>

                    <div className='cards'>
                        {noticias.map((n) => {
                            return (
                                <NavLink to={`/noticia/${n.id}`} aria-label='noticia-clicavel' key={n.id}>
                                    <div className='card'>
                                        <img src={n.imagemUrl} alt={n.imagemAlt} />
                                        <div className='box-text'>
                                            <h2>{n.titulo}</h2>
                                            <p>{n.descricao}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}

export default NoticiasRecentes