import React from "react";
import styled from "styled-components";
import Sobre from "./Sobre";
import GridCard from "../components/GridCard";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;

const BlocoEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #cf0000;
`;

const Subtitle = styled.p`
  font-size: 1em;
  color: #888;
`;

const BlocoDireito = styled.div`
  padding: 100px;
  overflow-y: auto;
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <BlocoEsquerdo>
          <Title>Wercton Barbosa</Title>
          <Subtitle>Desenvolvedor Front-End | React | JavaScript</Subtitle>
        </BlocoEsquerdo>
        <BlocoDireito>
          <Sobre />
          <GridCard />
        </BlocoDireito>
      </HomeContainer>
    </>
  );
};

export default Home;
