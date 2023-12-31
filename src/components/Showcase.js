import React from 'react';
import { PaddingContainer, FlexContainer, Heading, BlueText,ParaText, Particle, Button2 } from './styled-components/Global.styled';
import { ShowcaseImageCard, ShowcaseParticleContainer, IconContainer } from './styled-components/Showcase.styles';
import "../App.css"
import ShowcaseImg from '../assets/boy.jpg';
import BackgroundImg from '../assets/particle1.png';
import {BsGithub, BsTwitter, BsLinkedin} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';
import {FaDownload} from 'react-icons/fa';
import resumePDF from '../assets/Labh.pdf'



const Showcase = () => {



  return (
    <PaddingContainer left="2%" right="2%" top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
        <FlexContainer align="center" fullWidthChild>
            <div className='topper'> 
                <Heading as="h4" size="h4" >Hello!</Heading>

                <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
                    I'm <BlueText>Labh Khatke</BlueText>
                </Heading>

                <Heading as="h3" size="h3">
                    <BlueText>Full Stack Developer</BlueText>
                </Heading>
                
                <ParaText as="p" top="2rem" bottom="2rem">
                Hello! I'm Labh Khatke, a Full Stack Developer passionate about crafting user-friendly websites. With expertise in both front-end and back-end development, I bring digital ideas to life.
                </ParaText>
                
                <FlexContainer gap="20px" responsiveFlex >
                <Button2> <a
                        style={{textDecoration:"none"}}
                        href={resumePDF} 
                        download="Labh_Khatke_Resume.pdf" 
                    >
                        <FaDownload/> Resume
                    </a></Button2>
                    <IconContainer>
                        <BsTwitter onClick={() => window.open('https://twitter.com/Labh__K', '_blank')} />
                    </IconContainer>

                    <IconContainer>
                        <BsGithub onClick={() => window.open('https://github.com/labhk', '_blank')} />
                    </IconContainer>

                    <IconContainer>
                        <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/labh-k/', '_blank')} />
                    </IconContainer>
                </FlexContainer>
            </div>

            <FlexContainer justify="flex-end">
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard background={BackgroundImg}>
                        <img src={ShowcaseImg} alt="showcase" />
                    </ShowcaseImageCard>

                    <Particle src={BackgroundImg} initialTop="-80px" initialLeft="20px" rotate="60deg" />
                    <Particle src={BackgroundImg} initialTop="50px" initialRight="-70px" rotate="0deg"/>
                    <Particle src={BackgroundImg} initialBottom="10px" initialLeft="-70px" rotate="50deg" />
                </ShowcaseParticleContainer>
            </FlexContainer>

        </FlexContainer>

    </PaddingContainer>
  )
}

export default Showcase;