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
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-111">111-111-111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:harvinder.4592@gmail.com">
            harvinder.4592@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          quaerat.
        </Slogan>
      </CompanyContainer>
      <SocialIconsContainer>
        <SocialIcons href="https://www.github.com">
          <AiFillGithub size="3rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com">
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com">
          <AiFillInstagram size="3rem"></AiFillInstagram>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
