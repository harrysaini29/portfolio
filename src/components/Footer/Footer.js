import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91-735 583 7566">+91-735 583 7566</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:harvinder.4592@gmail.com">
            harvinder.4592@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        {/* <Slogan>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          quaerat.
        </Slogan> */}
      </CompanyContainer>
      <SocialIconsContainer>
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
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
