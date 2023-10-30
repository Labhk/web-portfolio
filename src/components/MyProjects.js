import React from 'react'
import { 
    PaddingContainer, 
    Heading, 
    BlueText, 
    FlexContainer, 
    ParaText, 
    IconContainer ,
    Button,
} 
from './styled-components/Global.styled';

import { 
    ProjectContentContainer, 
    ProjectImageContainer, 
    TechStackCard, 
    ProjectImage,
} from './styled-components/MyProjects.styled';

import {FaGithub} from 'react-icons/fa';

import Project from './layouts/Project';
import Project2 from './layouts/Project2';
import Project3 from './layouts/Project3';
import Project4 from './layouts/Project4';
import Project5 from './layouts/Project5';
import Project6 from './layouts/Project6';
import Project7 from './layouts/Project7';
import Project8 from './layouts/Project8';
import { fadeInTopVariant } from '../utils/Variants';

const MyProjects = () => {
  return (
    <PaddingContainer style={{padding:"15px"}} top="5%" bottom="5%" responsiveTop="20%" responsiveLeft="1rem" responsiveRight="1rem">
        <Heading 
            size="h4"
        >
            MY PROJECTS
        </Heading>

        <Heading 
            size="h2" 
            top="0.5rem"
        >
            What <BlueText>I have built</BlueText>
        </Heading>

        <PaddingContainer top="5rem" bottom="5rem" style={{padding:"15px"}}>
            <Project />
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem">
            <Project2  rowReverse/>
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem" style={{padding:"15px"}}>
            <Project3 />
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem">
            <Project4  rowReverse/>
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem" style={{padding:"15px"}}>
            <Project5 />
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem">
            <Project6  rowReverse/>
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem" style={{padding:"15px"}}>
            <Project7 />
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem">
            <Project8  rowReverse/>
        </PaddingContainer>
        
        
    </PaddingContainer>
  )
}

export default MyProjects