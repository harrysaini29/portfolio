import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem"></DiCssdeck>
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://github.com/harvinder-2908"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/harvinder-2908"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons
        href="https://www.instagram.com/harry.2908i"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
