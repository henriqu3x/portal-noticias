import Header from "../../components/header/Header";
import noticia6 from "../../assets/noticia6.avif";
import "./noticia.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import dataConvertida from "../../services/dataConvertida";

const Noticia = () => {
  const [noticia, setNoticia] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    const buscarNoticia = async () => {
      try {

        const response = await api.get(`/noticias/${id}`)
        setNoticia(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error.response?.data)
      }
    }

    buscarNoticia()
  }, [])

  if (!noticia) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Header />
      <main className="pageNoticia">
        <section className="section-noticia">
          <h1>
            {noticia.titulo}
          </h1>
          <p>Ultima Atualização: {dataConvertida(noticia.dataAtualizacao)}</p>
          <p>
            {noticia.descricao}
          </p>
          <img src={noticia.imagemUrl} alt={noticia.imagemAlt} />
          <p className="p-conteudo">
            {noticia.conteudo}
          </p>
        </section>
      </main>
    </>
  );
};

export default Noticia;
