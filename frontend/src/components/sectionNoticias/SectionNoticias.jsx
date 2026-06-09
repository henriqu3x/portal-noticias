import './sectionNoticias.css'
import Article from '../article/Article'
import CardNoticia from '../cardNoticia/CardNoticia'
import { useEffect, useState } from 'react'
import api from '../../services/api'

const SectionNoticias = () => {
    const [noticias, setNoticias] = useState([])
    const duasNoticias = noticias.slice(0, 2)
    const tresNoticias = noticias.slice(2, 5)

    useEffect(() => {
        const buscarNoticia = async () => {
            try {
                const response = await api.get('/noticias?limit=5')

                console.log(response.data)
                setNoticias(response.data)
            } catch (error) {
                console.log(error.response?.data)
            }
        }

        buscarNoticia()
    }, [])
    return (
        <section aria-label="Sessão Noticias" id="noticias">
            <aside id="noticias-laterais">
                {tresNoticias.map((n) => {
                    return (
                        <Article
                            key={n.id}
                            id={n.id}
                            image={n.imagemUrl}
                            alt={n.imagemAlt}
                            title={n.titulo}
                            descricao={n.descricao}
                        />
                    )
                })}
            </aside>
            <section aria-label="noticias principais" id="noticias-principais">
                {duasNoticias.map((n) => {
                    return (
                        <CardNoticia
                            key={n.id}
                            id={n.id}
                            image={n.imagemUrl}
                            alt={n.imagemAlt}
                            title={n.titulo}
                            descricao={n.descricao}
                        />
                    )
                })}
            </section>
        </section>
    )
}

export default SectionNoticias