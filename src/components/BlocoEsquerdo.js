import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  padding-left: 15%;
`;

const Container = styled.div``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Alinha o conteúdo à esquerda
  align-items: flex-start; // Alinha o conteúdo à esquerda
`;

const Title = styled.h1`
  font-size: 3em;
  color: #cf0000;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  color: #ccc;
  margin-top: 0px;
  margin-bottom: 0.5em;
`;

const MoreInfo = styled.p`
  font-size: 1.2em;
  color: #888;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 1.5em;
`;

const BlocoEsquerdo = () => {
  return (
    <Bloco>
      <Container>
        <Info>
          <Title>Wercton Barbosa</Title>
          <Subtitle>Desenvolvedor de Software</Subtitle>
          <MoreInfo>
            Focado na construção de sistemas de software eficientes e
            confiáveis.
          </MoreInfo>
        </Info>
        <Navbar />
      </Container>
    </Bloco>
  );
};

export default BlocoEsquerdo;
