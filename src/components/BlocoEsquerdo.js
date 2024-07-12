import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import SocialMedias from "./SocialMedias";

const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15%;
  padding-left: 25%;
  padding-bottom: 15%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #f7f7f2;
  margin-bottom: 0.5em;

  &:hover {
    color: #468189;
    cursor: pointer;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  color: #f7f7f2;
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
      <Info>
        <Title>Wercton Barbosa</Title>
        <Subtitle>Desenvolvedor de Software</Subtitle>
        <MoreInfo>
          Focado na construção de sistemas de software eficientes e confiáveis.
        </MoreInfo>
        <Navbar />
      </Info>
      <SocialMedias />
    </Bloco>
  );
};

export default BlocoEsquerdo;
