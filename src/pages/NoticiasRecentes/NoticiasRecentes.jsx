import './noticiasRecentes.css'
import noticia3 from '../../assets/noticia3.avif'
import Header from '../../components/header/Header'

const NoticiasRecentes = () => {
    return (
        <>
            <Header />
            <main className='noticias-recentes'>
                <section className='section-noticias-recentes'>
                    <h1>Noticias Recentes</h1>

                    <div className='cards'>
                        <a href="" aria-label='noticia-clicavel'>
                            <div className='card'>
                                <img src={noticia3} alt="" />
                                <div className='box-text'>
                                    <h2>Papa Leão XIV conhece Ferrari Luce de R$ 3,2 milhões e ganha volante</h2>
                                    <p>Além de ser o primeiro carro elétrico da Ferrari, a Luce também é o primeiro modelo da marca italiana com espaço para cinco ocupantes e custa cerca de R$ 3,2 milhões.</p>
                                </div>
                            </div>
                        </a>
                        <a href="" aria-label='noticia-clicavel'>
                            <div className='card'>
                                <img src={noticia3} alt="" />
                                <div className='box-text'>
                                    <h2>Papa Leão XIV conhece Ferrari Luce de R$ 3,2 milhões e ganha volante</h2>
                                    <p>Além de ser o primeiro carro elétrico da Ferrari, a Luce também é o primeiro modelo da marca italiana com espaço para cinco ocupantes e custa cerca de R$ 3,2 milhões.</p>
                                </div>
                            </div>
                        </a>
                        <a href="" aria-label='noticia-clicavel'>
                            <div className='card'>
                                <img src={noticia3} alt="" />
                                <div className='box-text'>
                                    <h2>Papa Leão XIV conhece Ferrari Luce de R$ 3,2 milhões e ganha volante</h2>
                                    <p>Além de ser o primeiro carro elétrico da Ferrari, a Luce também é o primeiro modelo da marca italiana com espaço para cinco ocupantes e custa cerca de R$ 3,2 milhões.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default NoticiasRecentes