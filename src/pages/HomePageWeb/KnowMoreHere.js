import React from 'react';
import styled from 'styled-components';
import friendsImage from '../../assets/homepageweb/2girls.jpg';

const KnowMoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8rem;
  // padding: 0 5vw;
  box-sizing: border-box;
  overflow-x: hidden;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 30px;
  }
  @media (max-width: 768px) {
    padding: 0 30px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    padding: 0 120px;
  }
  
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin 0 auto;
  img {
    width: auto;
    height: 45vh;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;

const TextContent = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: black;
  line-height: 1.3;
  padding-left: 2rem;
  max-width: 600px;

  @media (max-width: 1024px) {
    padding-left: 0;
    text-align: left;
  }

  @media (max-width: 1200px) {
    max-width: 561px;
    font-size: 16px;
    padding: 0;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding-left: 1.5rem;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: 18px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const KnowMoreHere = () => {
  return (
    <KnowMoreContainer>
      <ImageWrapper>
        <img src={friendsImage} alt="Felizes com a sustentabilidade de roupas alugadas" />
      </ImageWrapper>
      <TextContent>
        <p>Agora imagina ao invés de comprares uma peça de roupa nova, gastares esse dinheiro para usares, à priori, apenas num evento específico, alugares uma peça que está sem uso, poderes desta forma ir a esse evento com charme e dando uma nova vida a essa peça de roupa?! Esta opção também te encanta?</p>
        <p><Bold>Descobre mais como o podes fazer acedendo à nossa página num formato mobile ou instalando a nossa app.</Bold></p>
      </TextContent>
    </KnowMoreContainer>
  );
};

export default KnowMoreHere;