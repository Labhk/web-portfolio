import React from 'react';
import { FlexContainer, Heading, PaddingContainer, ParaText, BlueText } from './styled-components/Global.styled';
import { SkillsCardContainer,SkillsIconContainer } from './styled-components/MySkills.styled';
import { motion } from 'framer-motion';
import WebBanner from '../assets/Web-banner.png';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { DiNodejsSmall,DiCss3 } from 'react-icons/di';
import { BiLogoJavascript, BiLogoFirebase } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import {AiFillHtml5} from 'react-icons/ai';
import {BsGit} from 'react-icons/bs';
import "../App.css"

const MySkills = () => {
  return (
    <PaddingContainer top="5%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
      <FlexContainer responsiveDirection="column-reverse" responsiveFlex fullWidthChild>
        <SkillsCardContainer
        >
          <img src={WebBanner} alt='banner' />
        </SkillsCardContainer>

        <div  className='skill-set'>
          <div>
            <Heading as="h4" size="h4">MY SKILLS</Heading>
            <Heading as="h2" size="h2" top="0.5rem">What <BlueText>I can do</BlueText></Heading>
          </div>

          <div>
            <ParaText top="2rem" bottom="1.5rem" >As a developer, I am a versatile developer with expertise in both frontend and backend development. In the frontend, I excel in technologies such as React, JavaScript, and Tailwind, while on the backend, I leverage Firebase, Node.js with Express.js, and MongoDB to create dynamic and robust web applications.</ParaText>

            <ParaText>Currently, I am actively learning TypeScript and honing my skills in Next.js. I am always on the lookout for opportunities to collaborate with fellow developers, as I believe in continuous learning and improvement.</ParaText>
          </div>

          <div>
            <SkillsIconContainer>
              <FaReact />
              <SiTailwindcss />
              <DiNodejsSmall />
              <BiLogoJavascript />
              <BiLogoFirebase />
              <TbBrandNextjs />
              <SiMongodb/>
              <DiCss3/>
              <AiFillHtml5/>
              <BsGit/>
            </SkillsIconContainer>
          </div>
        </div>
      </FlexContainer>
    </PaddingContainer>
  );
}

export default MySkills;
