import './sectionNoticias.css'
import imgNoticia1 from '../../assets/noticia1.webp'
import imgNoticia2 from '../../assets/noticia2.avif'
import imgNoticia3 from '../../assets/noticia3.avif'
import imgNoticia4 from '../../assets/noticia4.avif'
import imgNoticia5 from '../../assets/noticia5.avif'
import Article from '../article/Article'
import CardNoticia from '../cardNoticia/CardNoticia'

const SectionNoticias = () => {
    return (
        <section aria-label="Sessão Noticias" id="noticias">
            <aside id="noticias-laterais">
                <Article
                image={imgNoticia1}
                title='Deputados debatem fim da escala 6x1'
                descricao='Comissão especial aprovou proposta por 34 votos a 4'
                />
                <Article
                image={imgNoticia2}
                title="Justiça suspende 'times square paulistana'"
                descricao='Prefeitura de São Paulo pode apresentar recurso'
                />
                <Article
                image={imgNoticia3}
                title='Papa Leão XIV conhece Ferrari Luce de R$ 3,2 milhões e ganha volante'
                descricao='a Luce é o primeiro modelo da marca italiana com espaço para cinco ocupantes'
                />
            </aside>
            <section aria-label="noticias principais" id="noticias-principais">
                <CardNoticia
                image={imgNoticia4}
                alt='Mulher sentada ao lado de socorristas'
                title='Mulher jogada em penhasco pelo ex se escondeu da equipe de buscas por achar que agressor havia retornado'
                descricao='De acordo com os bombeiros, a vítima só percebeu que se tratava de ajuda no dia seguinte'
                />
                <CardNoticia
                image={imgNoticia5}
                alt='Assentos de avião'
                title='Confusão por assento em voo da Latam'
                descricao='Caso da passageira brasileira que foi obrigada a trocar de assento após cartão de embarque ser emitido com um assento diferente do que o que ela havia comprado levantou questionamentos'
                />
            </section>
        </section>
    )
}

export default SectionNoticias