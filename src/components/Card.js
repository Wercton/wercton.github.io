import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  padding: 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #202020;
  }
`;

const PeriodoTexto = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #888;
`;

const ConteudoDireito = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Titulo = styled.h2`
  font-size: 1.2em;
  margin: 0;
  color: #F7F7F2;
`;

const Descricao = styled.p`
  font-size: 1em;
  color: #888;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
`;

const Tag = styled.span`
  background-color: #0F2934;
  color: #fff;
  font-size: 0.8em;
  padding: 8px;
  border-radius: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const Card = ({ periodo, titulo, descricao, tags }) => {
  return (
    <CardContainer>
      <div>
        <PeriodoTexto>{periodo}</PeriodoTexto>
      </div>
      <ConteudoDireito>
        <div>
          <Titulo>{titulo}</Titulo>
        </div>
        <Descricao>{descricao}</Descricao>
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
      </ConteudoDireito>
    </CardContainer>
  );
};

export default Card;