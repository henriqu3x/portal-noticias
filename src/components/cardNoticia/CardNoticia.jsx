import './cardNoticia.css'

const CardNoticia = (props) => {
    return (
        <article>
            <img src={props.image} alt={props.alt} />
            <a href="">
                <h2>{props.title}</h2>
                <p>{props.descricao}</p>
            </a>
        </article>
    )
}

export default CardNoticia