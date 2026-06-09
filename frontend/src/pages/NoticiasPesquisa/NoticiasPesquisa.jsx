import './NoticiasPesquisa.css'
import Header from '../../components/header/Header'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'

const NoticiasPesquisa = () => {
    const [noticias, setNoticia] = useState([])
    const {termo} = useParams()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const buscarNoticias = async () => {
            try {
                const termo = searchParams.get('termo')
                const response = await api.get(`/noticiasPesquisa?termo=${termo}`)

                setNoticia(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error.response?.data)
            }
        }

        buscarNoticias()
    }, [])

    return (
        <>
            <Header />
            <main className='noticias-pesquisa'>
                <section className='section-noticias-pesquisa'>
                    <h1>Noticias</h1>

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

export default NoticiasPesquisa