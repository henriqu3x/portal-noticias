import './article.css'
import imgTest from '../../assets/noticia2.avif'
import { NavLink } from 'react-router-dom'

const Article = (props) => {
    return (
        <NavLink className='noticias-aside' to={'/noticia/1'} aria-label='bloco de noticias aside'>
            <article>
                <div className='img-wrraper'>
                    <img src={props.image} alt={props.alt} />
                </div>

                <div className='content'>
                    <h2>{props.title}</h2>
                    <p>{props.descricao}</p>
                </div>
            </article>
        </NavLink>
    )
}

export default Article