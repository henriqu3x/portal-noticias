import './cardNoticia.css'

const CardNoticia = (props) => {
    return (
        <a aria-label='bloco de noticias' className='noticias-princi' href="">
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

export default CardNoticia