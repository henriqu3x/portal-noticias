import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import SectionNoticias from '../components/sectionNoticias/SectionNoticias'

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <SectionNoticias />
            </main>
            <Footer />
        </>
    )
}

export default Home