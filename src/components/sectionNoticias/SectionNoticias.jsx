import './sectionNoticias.css'
import imgNoticia4 from '../../assets/noticia4.avif'
import imgNoticia5 from '../../assets/noticia5.avif'

const SectionNoticias = () => {
    return (
        <section aria-label="Sessão Noticias" id="noticias">
            <aside id="noticias-laterais">
                <a href="">
                    <article>
                        <h2>Deputados debatem fim da escala 6x1</h2>
                        <p>Comissão especial aprovou proposta por 34 votos a 4</p>
                    </article>
                </a>
                <a href="">
                    <article>
                        <h2>Justiça suspende 'times square paulistana'</h2>
                        <p>Prefeitura de São Paulo pode apresentar recurso</p>
                    </article>
                </a>
                <a href="">
                    <article>
                        <h2>Papa Leão XIV conhece Ferrari Luce de R$ 3,2 milhões e ganha volante</h2>
                        <p>a Luce é o primeiro modelo da marca italiana com espaço para cinco ocupantes</p>
                    </article>
                </a>
            </aside>
            <section aria-label="noticias principais" id="noticias-principais">
                <article>
                    <img src={imgNoticia4} alt="Mulher sentada ao lado de socorristas" />
                    <a href="">
                        <h2>Mulher jogada em penhasco pelo ex se escondeu da equipe de buscas por achar que agressor havia retornado</h2>
                        <p>De acordo com os bombeiros, a vítima só percebeu que se tratava de ajuda no dia seguinte</p>
                    </a>
                </article>
                <article>
                    <img src={imgNoticia5} alt="Assentos de avião" />
                    <a href="">
                        <h2>Confusão por assento em voo da Latam</h2>
                        <p>Caso da passageira brasileira que foi obrigada a trocar de assento após cartão de embarque ser emitido com um assento diferente do que o que ela havia comprado levantou questionamentos</p>
                    </a>
                </article>
            </section>
        </section>
    )
}

export default SectionNoticias