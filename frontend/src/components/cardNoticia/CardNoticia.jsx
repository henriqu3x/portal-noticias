import { NavLink } from 'react-router-dom'
import './cardNoticia.css'

const CardNoticia = (props) => {
    return (
        <NavLink aria-label='bloco de noticias' className='noticias-princi' to={`/noticia/${props.id}`}>
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

export default CardNoticia