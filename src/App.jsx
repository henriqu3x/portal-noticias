import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import SectionNoticias from "./components/sectionNoticias/SectionNoticias"

const App = () => {
  return(
    <>
      <Header/>
      <main>
        <SectionNoticias/>
      </main>
      <Footer/>
    </>
  )
}

export default App