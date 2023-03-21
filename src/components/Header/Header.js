import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GrGraphQl } from 'react-icons/GR';

import { Container, Div1, Div2, Div3, Div4, NavLink, SocialIcons, CompanyContainerHeader, SloganHeader } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <GrGraphQl size="4.5rem" /> <span>Homepage</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/thon94">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/thinh-on/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        {/* <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons> */}
      </Div3>
      <Div4>
        <CompanyContainerHeader>
          <SloganHeader>The only way to do great work is to love what you do. -- Steve Jobs</SloganHeader>
        </CompanyContainerHeader>
      </Div4>
      
  </Container>

);

export default Header;
