import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "3+", text: "Years of professional experience" },
  { number: "15+", text: "Projects delivered" },
  { number: "Above 90%", text: "Customer Satisfaction achieved" },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider></SectionDivider>
    <br />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
