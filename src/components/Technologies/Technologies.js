import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BsGraphUpArrow } from 'react-icons/bs';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Machine Learning world.
      From simplistic supervised learning to complex self-supervised learning and reinforcement learning.
    </SectionText>
    <List>
      <ListItem>
        <img src="../../images/time_series.png"  width="70"  height="70"></img>
        <ListContainer>
          <ListTitle>Time Series Regression</ListTitle>
          <ListParagraph>
            Experience with <br />
            Autoformer, Fedformer, <br />
            Transformers, ARIMA
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <img src="./../../images/vision.png"  width="70"  height="70">
          {/* <DiFirebase size="3rem" /> */}
        </img>
        <ListContainer>
          <ListTitle>Computer Vision</ListTitle>
          <ListParagraph>
            Image classification, segmentation, object detection
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
