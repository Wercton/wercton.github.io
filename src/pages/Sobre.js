import React from "react";
import styled from "styled-components";

const TextoSobre = styled.p`
  color: #888888;
  font-size: 16px;
  text-align: left; /* Alinhar o texto à direita */
  line-height: 1.6; /* Aumentar o espaço entre as linhas */
`;

const Destaque = styled.a`
  color: #f7f7f2;
  font-weight: bold;
  text-decoration: none;
  transform: color 0.3s ease;

  &:hover {
    color: #468189;
    cursor: pointer;
  }
`;

const Sobre = () => {
  return (
    <div>
      <TextoSobre>
        Graduado em Ciência da Computação pela{" "}
        <Destaque href="https://www.uft.edu.br/" target="_blank">
          Universidade Federal do Tocantins (UFT)
        </Destaque>
        , campus Palmas. Fluente em inglês, certificado pelo{" "}
        <Destaque>TOEFL</Destaque>, e estudante de alemão, certificado pelo{" "}
        <Destaque>DW Akademie</Destaque> (nível A2). Atualmente, trabalho na{" "}
        <Destaque>Secretaria da Educação</Destaque> do Governo do Estado do
        Tocantins, onde aplico minha experiência em desenvolvimento de software
        e gestão de sistemas.
      </TextoSobre>
      <TextoSobre>
        Minha pesquisa incluiu o uso de Algoritmos Genéticos para otimizar a
        geometria de pás de aerogeradores, utilizando Python e a biblioteca
        Numpy. Como desenvolvedor backend, contribuí no desenvolvimento e
        gerenciamento de sistemas na{" "}
        <Destaque href="http://fabricadesoftware.uft.edu.br/" target="_blank">
          Fábrica de Software
        </Destaque>{" "}
        da UFT e nos softwares de mercado financeiro da empresa tech{" "}
        <Destaque href="https://www.nelogica.com.br/" target="_blank">
          Nelogica
        </Destaque>
        .
      </TextoSobre>
      <TextoSobre>
        Sou apaixonado por tecnologia e continuo buscando conhecimento, buscando
        sempre contribuir de maneira significativa para o avanço tecnológico.
      </TextoSobre>
    </div>
  );
};

export default Sobre;
