import React from 'react';
import styled from 'styled-components';
import closetImage from '../../assets/homepageweb/naturedress.jpg';

const ClosetContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 8rem;
  padding: 0 2rem;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (min-width: 600px) and (max-width: 768px) {
    padding: 0 30px;
    margin-top: unset;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    margin-top: unset;
    padding: 0 60px;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    padding: 0 60px;
  }
`;

const ClosetTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 48px;
  font-weight: bold;
  margin-top: 3rem;
  max-width: 90%;

  @media (max-width: 1024px) {
    font-size: 30px;
    width: 100%;
  }
  @media (max-width: 1200px) {
    font-size: 35px;
  }
`;

const Highlight = styled.span`
  color: #00C17C;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: black;
  line-height: 1.3;
  max-width: 600px; 
  
  @media (max-width: 1200px) {
    padding-right: 0;
    padding-top: 20px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 561px;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    padding-right: 50px;
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: 18px;
  }
`;

const Bolder = styled.span`
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  text-align: right;

  @media (max-width: 1024px) {
    padding: 0;
    text-align: center;
  }
`;

const ClosetImage = styled.img`
  width: auto;
  height: 45vh;
`;

const InfiniteCloset = () => {
  return (
    <ClosetContainer>
      <ClosetTitle>
        Ter um armário infinito de forma sustentável? <Highlight>É possível!</Highlight>
      </ClosetTitle>
      <ContentContainer>
        <TextContent>
          <p>
            Ao escolher a <Bolder>Boomerang</Bolder>, estás a contribuir para um movimento que valoriza a moda de forma responsável. Cada peça conta a sua própria história, de um compromisso com um futuro mais sustentável.
          </p>
          <p>
            Tens uma peça de roupa parada no teu armário? Imagina agora poderes-lhe dar uma nova vida e rentabilizares o teu armário dessa forma. <br /><Bolder>Gostas da ideia?</Bolder>
          </p>
        </TextContent>
        <ImageWrapper>
          <ClosetImage src={closetImage} alt="Sustentabilidade na moda" />
        </ImageWrapper>
      </ContentContainer>
    </ClosetContainer>
  );
};

export default InfiniteCloset;