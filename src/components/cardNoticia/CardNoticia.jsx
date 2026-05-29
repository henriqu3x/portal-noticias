import './cardNoticia.css'

const CardNoticia = (props) => {
    return (
        <a aria-label='bloco de noticias' className='noticias-princi' href="">
            <article style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url(${props.image})` }}>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.descricao}</p>
                </div>
            </article>
        </a>
    )
}

export default CardNoticia