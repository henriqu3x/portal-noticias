import Header from "../../components/header/Header";
import noticia6 from "../../assets/noticia6.avif";
import "./noticia.css";

const Noticia = () => {
  return (
    <>
      <Header />
      <main className="pageNoticia">
        <section className="section-noticia">
          <h1>
            Após conversa com Netanyahu e Hezbollah, Trump garante cessar-fogo e
            diz que não haverá tropas de Israel em Beirute
          </h1>
          <p>
            Israel voltou a intensificar ataques contra o Líbano nos últimos
            dias, sob a justificativa de combate ao Hezbollah. Segundo agência
            de notícias iraniana, Teerã decidiu encerrar troca de mensagens com
            os EUA devido às agressões israelenses.
          </p>
          <img src={noticia6} alt="" />
          <p className="p-conteudo">
            "Da mesma forma, por meio de representantes de alto escalão, tive
            uma conversa muito boa com o Hezbollah, e eles concordaram que todos
            os disparos cessarão — que Israel não os atacará e que eles não
            atacarão Israel", diz o post. Mais cedo, segundo a agência de
            notícias iraniana Tasnim, Teerã decidiu interromper a troca de
            mensagens com os mediadores sobre o memorando de entendimento com os
            EUA após os novos ataques de Israel ao Líbano, inclusive com ordens
            de evacuação e alertas de bombardeio à capital, Beirute, nesta
            segunda. No sábado, Israel havia capturado o histórico castelo de
            Beaufort, no Líbano, construído na época das Cruzadas, na incursão
            mais profunda das tropas no país em 26 anos.
          </p>
        </section>
      </main>
    </>
  );
};

export default Noticia;
