import React from "react";
import styled from "styled-components";
import Sobre from "./Sobre";
import GridCard from "../components/GridCard";
import BlocoEsquerdo from "../components/BlocoEsquerdo";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const BlocoDireito = styled.div`
  position: relative;
  padding: 15%;
  max-height: 100vh;
  overflow-y: auto;
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <BlocoEsquerdo />
        <BlocoDireito>
          <Sobre />
          <GridCard />
        </BlocoDireito>
      </HomeContainer>
    </>
  );
};

export default Home;
