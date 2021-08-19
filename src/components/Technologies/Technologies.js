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
    <br />
    <SectionDivider></SectionDivider>
    <br />
    <SectionTitle>Technologies/ Skills</SectionTitle>
    {/* <SectionText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis
      veniam aliquid cupiditate, tenetur harum quasi at quisquam ipsa nostrum.
    </SectionText> */}
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <b>JavaScript ES6 -</b> React w/ hooks, Redux, jQuery, TypeScript,
            SAP UI5 and Fiori <br />
            <b>CSS3</b> - Sass/SCSS
            <br /> <b>HTML5</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python 3, Rest API, GraphQL, SAP ABAP, HANA DB, SQL
          </ListParagraph>
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
