import './article.css'
import imgTest from '../../assets/noticia2.avif'

const Article = (props) => {
    return (
        <a className='noticias-aside' href="" aria-label='bloco de noticias aside'>
            <article style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url(${props.image})`}}>
                <h2>{props.title}</h2>
                <p>{props.descricao}</p>
            </article>
        </a>
    )
}

export default Article