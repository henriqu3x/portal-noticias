import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import SectionNoticias from "./components/sectionNoticias/SectionNoticias"

const App = () => {
  return(
    <>
      <Header/>
      <main style={{height: 'calc(100vh - 140px)'}}>
        <SectionNoticias/>
      </main>
      <Footer/>
    </>
  )
}

export default App