import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey,  <br />
        I'm Sajees Jeyasangar or SJ a Full-Stack Developer
      </SectionTitle>
      <SectionText>
      Full-Stack Web Developer with a strong desire to learn, build new things and stay up-to-date with the latest technologies. With a strong foundation in both front-end and back-end development, with a variety of programming languages and frameworks. 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;