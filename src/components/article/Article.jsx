import './article.css'
import imgTest from '../../assets/noticia2.avif'

const Article = (props) => {
    return (
        <a href="">
            <article style={{backgroundImage:`url(${props.image})`}}>
                <h2>{props.title}</h2>
                <p>{props.descricao}</p>
            </article>
        </a>
    )
}

export default Article