import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import { FaLetterboxd } from "react-icons/fa6";

const Nav = styled.nav`
  background-color: #111111;
  padding: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  margin: 0 15px;
`;

const A = styled.a`
  color: #f7f7f2;
  text-decoration: none;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #468189;
  }
`;

const SocialMedias = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <A
            href="https://github.com/wercton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </A>
        </Li>
        <Li>
          <A
            href="https://www.linkedin.com/in/wercton-barbosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </A>
        </Li>
        <Li>
          <A
            href="https://www.instagram.com/wercton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </A>
        </Li>
        <Li>
          <A
            href="https://open.spotify.com/user/wercton?si=096d34836d57476f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify />
          </A>
        </Li>
        <Li>
          <A
            href="https://letterboxd.com/Wercton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLetterboxd />
          </A>
        </Li>
      </Ul>
    </Nav>
  );
};

export default SocialMedias;
