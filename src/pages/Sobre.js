import React from "react";
import styled from "styled-components";

const TextoSobre = styled.p`
  color: #CCC;
  font-size: 16px;
  text-align: left; /* Alinhar o texto à direita */
  line-height: 1.6; /* Aumentar o espaço entre as linhas */
`;

const Destaque = styled.strong`
  color: #CF0000;
`;

const Sobre = () => {
  return (
    <div>
      <TextoSobre>
        Graduado em Ciência da Computação pela{" "}
        <Destaque>Universidade Federal do Tocantins</Destaque> (UFT), campus
        Palmas. Fluente em inglês, certificado pelo <Destaque>TOEFL</Destaque>,
        e estudante de alemão, certificado pelo <Destaque>DW Akademie</Destaque>{" "}
        (nível A2). Atualmente, trabalho na <Destaque>Secretaria da Educação</Destaque> do Governo do
        Estado do Tocantins, onde aplico minha experiência em desenvolvimento de
        software e gestão de sistemas.
      </TextoSobre>
      <TextoSobre>
        Minha pesquisa incluiu o uso de Algoritmos Genéticos para otimizar a
        geometria de pás de aerogeradores, utilizando Python e a biblioteca
        Numpy. Como desenvolvedor backend, contribuí no desenvolvimento e
        gerenciamento de sistemas na <Destaque>Fábrica de Software</Destaque> da
        UFT e nos softwares de mercado financeiro da empresa tech{" "}
        <Destaque>Nelogica</Destaque>. Sou apaixonado por tecnologia e continuo
        buscando conhecimento, buscando sempre contribuir de maneira
        significativa para o avanço tecnológico.
      </TextoSobre>
    </div>
  );
};

export default Sobre;
