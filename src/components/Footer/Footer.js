import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, SloganHeader } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:575-418-0555">575-418-0555</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:onkimthinh@gmail.com">
            onkimthinh@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>The only way to do great work is to love what you do. -- Steve Jobs</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/thon94">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/thinh-on/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
