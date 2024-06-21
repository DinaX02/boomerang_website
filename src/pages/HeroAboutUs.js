import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/sobrenos/equipa-2.jpg';

const HeroWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover; /* Pode ajustar para 'contain' dependendo da necessidade */
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: #F8F8F8;
  padding: 0 2rem;  /* Ajuste de padding para evitar overflow */
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    background-position: center top;
  }

  @media (max-width: 768px) {
    background-position: center top;
  }

  @media (max-width: 480px) {
    background-position: center top;
  }
`;

const HeroOverlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #F8F8F8;
  line-height: 1.2;
  z-index: 2;
  max-width: 55%;

  @media (max-width: 1024px) {
    font-size: 30px;
    max-width: 70%;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const HeroText = styled.p`
  font-size: 18px;
  margin-bottom: 1rem;
  font-weight: 400;
  color: #F8F8F8;
  line-height: 1.3;
  z-index: 2;
  max-width: 45%;

  @media (max-width: 1024px) {
    max-width: 70%;
  }

  @media (max-width: 768px) {
    max-width: 80%; 
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const HeroAboutUs = () => {
  return (
    <HeroWrapper>
      <HeroOverlay />
      <HeroTitle>Sobre Nós </HeroTitle>
      <HeroText>Conhece mais sobre a equipa por detrás da Boomerang e o que nos motiva!</HeroText>
    </HeroWrapper>
  );
};

export default HeroAboutUs;