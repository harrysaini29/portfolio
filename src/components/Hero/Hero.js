import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am <br />
        Harvinder
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        laboriosam quos porro molestias dolores facere saepe in, consectetur
        temporibus culpa.
      </SectionText>
      <Button
        onClick={() => {
          return (window.location =
            "https://www.linkedin.com/in/harvinder-singh-29081997/");
        }}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
