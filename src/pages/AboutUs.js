import React, { useEffect } from "react";
import Navbar from "./HomePageWeb/Navbar";
import styled from "styled-components";
import DinisFto from "../assets/sobrenos/diniss.png";
import DanielaFto from "../assets/sobrenos/dani.png";
import InesFto from "../assets/sobrenos/iness.png";
import MargaridaFto from "../assets/sobrenos/margarida.png";
import CerqueiraFto from "../assets/sobrenos/cerqueriaa.png";
import TiegoFto from "../assets/sobrenos/tiegovski.png";
// import DinisFto from "../assets/sobrenos/dinis 1.png";
// import DanielaFto from "../assets/sobrenos/daniela2 1.png";
// import InesFto from "../assets/sobrenos/ines 1.png";
// import MargaridaFto from "../assets/sobrenos/margarida 1.png";
// import CerqueiraFto from "../assets/sobrenos/cerqueira 1.png";
// import TiegoFto from "../assets/sobrenos/tiego.png";
// import ImgHero from "../assets/sobrenos/img_hero.png";
import colors from "./../assets/colors";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../pages/HomePageWeb/Footer";
import HeroAboutUs from "./HeroAboutUs";

// const ContainerInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-left: 1.4em;
//   padding-right: 1.4em;
//   margin-top: 5em;

//   .titulosAboutUs {
//     margin-top: 1em;
//     font-size: xx-large;
//   }

//   h5 {
//     margin-bottom: 1em;
//   }

//   .tags_boomerang {
//     background-color: ${colors.cinzaEscuro};
//     /* border: 2px solid #5D5D67; */
//     color: #00c17c;
//     padding-top: 0.3em;
//     padding-bottom: 0.3em;
//     padding-left: 0.7em;
//     padding-right: 0.7em;
//     border-radius: 25px;
//     max-width: 150px;
//     margin-right: 0.7em;
//     margin-bottom: 0.7em;
//   }

//   .tags_boomerang_big {
//     background-color: ${colors.cinzaEscuro};
//     /* border: 2px solid #5D5D67; */
//     color: #00c17c;
//     padding-top: 0.3em;
//     padding-bottom: 0.3em;
//     padding-left: 0.7em;
//     padding-right: 0.7em;
//     border-radius: 25px;
//     max-width: 180px;
//     margin-right: 0.7em;
//     margin-bottom: 0.7em;
//   }

//   .tags_boomerang_extra {
//     background-color: ${colors.cinzaEscuro};
//     /* border: 2px solid #5D5D67; */
//     color: #00c17c;
//     padding-top: 0.3em;
//     padding-bottom: 0.3em;
//     padding-left: 0.7em;
//     padding-right: 0.7em;
//     border-radius: 25px;
//     max-width: 220px;
//     margin-right: 0.7em;
//     margin-bottom: 0.7em;
//   }

//   img {
//     margin-top: 1em;
//     margin-bottom: 1em;
//   }
// `;

const ContainerTeam = styled.div`
  margin-top: 2em;
  background-color: ${colors.cinzaEscuro};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1.4em;
  padding-right: 1.4em;

  .cardTeam {
    color: white;
    text-align: center;
    img {
      max-width: 150px;
      margin-bottom: 1em;
    }
  }

  .roles {
    font-weight: lighter;
    font-size: 13px;
  }

  .containerCards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 2em;
    margin-top: 1em;
    width: 100%;
  }
`;

const TagTeam = styled.div`
  border: 2px solid #00c17c;
  border-radius: 20px;
  color: #00c17c;
  padding: 0.4em;
  margin-top: 2em;
  margin-bottom: 1em;
  width: 180px;
  text-align: center;
`;

const BackButton = styled.button`
  position: fixed;
  top: 5rem;
  left: 2rem;
  background-color: #00c17c;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #009d6b;
  }
`;

const AboutUsContainer = styled.div`
  padding: 50px;
  font-size: 16px;
  max-width: 800px;
  margin: auto;

  h1 {
    font-size: 2em;
    margin-bottom: 1em;
    color: #333;
  }

  h5 {
    font-size: 1.2em;
    margin-bottom: 1em;
    color: #666;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1.5em;
    color: #444;
  }

  .tagsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }

  .tag {
    background-color: ${colors.cinzaEscuro};
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
    color: #00c17c;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    padding: 20px;
    h1 {
      font-size: 1.5em;
    }
    h5 {
      font-size: 1em;
    }
    p {
      font-size: 14px;
    }
  }
`;

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroAboutUs />
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </BackButton>
      <AboutUsContainer>
        <section>
          <h1>Nossa História</h1>
          <p>
            Este projeto nasceu no 1º do Mestrado em Comunicação e Tecnologias
            Web na Universidade de Aveiro no ano letivo 2023/2024, quando fomos
            desafiados a criar um projeto inovador capaz de marcar o futuro do
            e-commerce de forma sustentável.
            <br />
            Neste espaço, a indústria da moda não é um campo particularmente
            inovador e irreverente. Lojas online preenchem o espaço do
            e-commerce sem acrescentar ou mudar em nada os hábitos dos
            consumidores.
            <br />
            Assim, desde a partilha do desafio o nosso objetivo é focar na
            inovação da indústria da moda associada ao e-commerce e à
            sustentabilidade.
            <br />
            Dito isto, a Boomerang consiste numa plataforma de aluguer de roupa
            peer-to-peer, onde qualquer pessoa pode rentabilizar peças de roupa
            que já não usa, ou poupar dinheiro, alugando roupa que só vai
            precisar de usar uma vez.
            <br />
            Este conceito pretende radicalizar a forma como as pessoas compram e
            usam a sua roupa, levando os mesmos a ter um consumo mais
            sustentável e responsável.
          </p>
        </section>

        <section>
          <h1 className="titulosAboutUs">Missão.</h1>
          <h5>Revolucionar os hábitos de consumo do mercado da moda.</h5>
          <p>
            Queremos ser o começo de uma nova forma de utilizar e partilhar
            roupa que dá oportunidade para todos de se sentirem bem com a roupa
            que usam da forma mais acessível e sustentável possível.
            Vislumbramos liderar uma mudança radical na indústria da moda,
            tornando-a mais sustentável e acessível para todos. Queremos
            inspirar uma mudança de mentalidade, tornando a moda sinónimo de
            responsabilidade ambiental.
            <br />
            <br />
            Prevemos ser a principal razão pela qual menos roupas são
            desperdiçadas, estabelecendo práticas que prolongam a vida útil de
            peças de qualidade. Ao fazê-lo, desejamos não apenas redefinir as
            escolhas de moda, mas também criar uma comunidade globalmente
            comprometida com um consumo consciente.
            <br />
            <br />O nosso futuro é um onde cada peça conta uma história de
            impacto positivo no mundo.
          </p>
        </section>

        <section>
          <h1 className="titulosAboutUs" style={{ marginBottom: "1em" }}>
            Valores.
          </h1>
          <p>
            Na Boomerang, cultivamos valores fundamentais que definem a essência
            da nossa marca.
            <br />
            <br />
            Acreditamos na confiança mútua entre os utilizadores e temos como
            objetivo comprometer os hábitos sustentáveis para mitigar o
            desperdício têxtil, assegurando sempre transparência entre cada
            interação.
            <br />
            <br />
            Inspiramos a positividade no futuro, destacando o potencial próprio
            de cada utilizador. Priorizamos a segurança, de forma a garantir que
            cada utilizador se sinta protegido ao usar a Boomerang e venha
            connosco nesta jornada consciente.
          </p>
          <div className="tagsContainer">
            <div className="tag">Confiança</div>
            <div className="tag">Autoestima</div>
            <div className="tag">Hábitos sustentáveis</div>
            <div className="tag">Transparência</div>
            <div className="tag">Positividade no futuro</div>
            <div className="tag">Potencial próprio</div>
            <div className="tag">Segurança</div>
          </div>
        </section>
      </AboutUsContainer>

      <ContainerTeam>
      

        {/* EQUIPA */}
    <TagTeam>A Equipa</TagTeam>
        <div className="containerCards">
        
          <div className="cardTeam">
            <img src={DanielaFto} alt="foto Daniela" />
            <p>Daniela Gomes</p>
            <p className="roles">UI Design</p>
          </div>

          <div className="cardTeam">
            <img src={DinisFto} alt="foto Dinis" />
            <p>Dinis Antunes</p>
            <p className="roles">
              UX & UI Design<br></br>
              Branding<br></br>
              Front-end
            </p>
          </div>

          <div className="cardTeam">
            <img src={InesFto} alt="foto Inês" />
            <p>Inês Torres</p>
            <p className="roles">
              UX & UI Design<br></br>
              Front-end
            </p>
          </div>

          <div className="cardTeam">
            <img src={MargaridaFto} alt="foto Margarida" />
            <p>Margarida Alves</p>
            <p className="roles">Back-end</p>
          </div>

          <div className="cardTeam">
            <img src={CerqueiraFto} alt="foto Ricardo" />
            <p>Ricardo Cerqueira</p>
            <p className="roles">Full-Stack</p>
          </div>

          <div className="cardTeam">
            <img src={TiegoFto} alt="foto Tiago" />
            <p>Tiago Marques</p>
            <p className="roles">Full-Stack</p>
          </div>
        </div>
      </ContainerTeam>
      <Footer />
    </div>
  );
};

export default AboutUs;
