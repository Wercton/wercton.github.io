import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  padding: 10px;
  margin: 5px 15px;
  ${'' /* color: white; */}
  text-align: left;
`;

const A = styled.a`
  color: #F7F7F2;
  text-decoration: none;

  &:hover {
    color: #468189;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <A>Sobre</A>
        </Li>
        <Li>
          <A>Experiência</A>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
