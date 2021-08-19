import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { Div1 } from "../Header/HeaderStyles";

const Projects = () => (
  <Section id="projects">
    <SectionDivider></SectionDivider>
    <SectionTitle nopadding main>
      Projects
    </SectionTitle>
    <GridContainer nopadding>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => {
          return (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr></Hr>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, id) => (
                    <Tag key={id}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        }
      )}
    </GridContainer>
  </Section>
);

export default Projects;
