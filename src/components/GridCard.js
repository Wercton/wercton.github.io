import React from "react";
import Card from "./Card";

const GridCard = () => {
  return (
    <div>
      <Card
        periodo="2024 - Presente"
        titulo="Analista de Sistemas - Secretaria de Educação do Estado do Tocantins"
        descricao="Na Secretaria de Educação do Estado do Tocantins, atuo como desenvolvedor full-stack, responsável pelo desenvolvimento e manutenção de sistemas educacionais vitais para a gestão de escolas e programas educacionais."
        tags={[
          "React",
          "JavaScript",
          "Next.js",
          "Desenvolvimento Full-Stack",
          "Git",
        ]}
      />
      <Card
        periodo="2021 - 2022"
        titulo="Desenvolvedor de Software - Nelogica"
        descricao="fui responsável pelo desenvolvimento e gerenciamento da aplicação para desktop do mercado financeiro Profit. Utilizei as tecnologias Delphi e Django, e configurei o servidor utilizando NGINX. Além disso, trabalhei com GitLab e GitHub para o versionamento de código, garantindo a qualidade e integridade do software durante o desenvolvimento."
        tags={["Delphi", "Django", "Nginx", "Git"]}
      />
      <Card
        periodo="2020 - 2021"
        titulo="Desenvolvedor Estagiário - Fábrica de Software"
        descricao="Trabalhei principalmente com tecnologias como Python utilizando o framework Django, bancos de dados SQL incluindo MySQL e PostgreSQL, e também desenvolvimento web utilizando HTML, CSS e JavaScript. Além disso, utilizei o GitLab para o versionamento de código, garantindo o controle e colaboração eficientes durante o desenvolvimento dos projetos."
        tags={["Django", "Python", "MySQL", "PostgresSQL", "Git"]}
      />
    </div>
  );
};

export default GridCard;
