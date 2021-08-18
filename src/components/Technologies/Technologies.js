import React from "react";
import { DiFirebase, DiReact, DiApple } from "react-icons/di";
import { AiOutlineMobile } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis
      veniam aliquid cupiditate, tenetur harum quasi at quisquam ipsa nostrum.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React and SAP UI5</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>SAP ABAP and Databases</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineMobile size="3rem"></AiOutlineMobile>
        <ListContainer>
          <ListTitle>Mobile-Development</ListTitle>
          <ListParagraph>SAP Mobile Development Kit</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
