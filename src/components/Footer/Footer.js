import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sajees.jeya@gmail.com">sajees.jeya@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building and learning one project at a time</Slogan>
        </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/sajees89">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://linkedin.com/in/sajeesjeya">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://instagram.com/codingwithsj">
      <AiFillInstagram size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://twitter.com/CodingwithSJ">
      <AiFillTwitterSquare size="3rem" />
    </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
