import './article.css'
import imgTest from '../../assets/noticia2.avif'

const Article = (props) => {
    return (
        <a className='noticias-aside' href="" aria-label='bloco de noticias aside'>
            <article>
                <div className='img-wrraper'>
                    <img src={props.image} alt={props.alt} />
                </div>

                <div className='content'>
                    <h2>{props.title}</h2>
                    <p>{props.descricao}</p>
                </div>
            </article>
        </a>
    )
}

export default Article