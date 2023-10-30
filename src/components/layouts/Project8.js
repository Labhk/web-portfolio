import React, { useState } from 'react';
import "../../App.css"


import { 
    PaddingContainer, 
    Heading, 
    FlexContainer, 
    ParaText1, 
    Button1,
} 
from '../styled-components/Global.styled';

import {LiaWindowCloseSolid} from 'react-icons/lia'

import { 
    ProjectContentContainer, 
    ProjectImageContainer, 
    TechStackCard, 
    ProjectImage,
} from '../styled-components/MyProjects.styled';

import {FaGithub} from 'react-icons/fa';

import Project8 from '../../assets/Project8.jpg';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Project = ({ rowReverse }) => {
    const [isVideoModalOpen, setVideoModalOpen] = useState(false);
    const openVideoModal = () => {
        setVideoModalOpen(true);
      };
    
      const closeVideoModal = () => {
        setVideoModalOpen(false);
      };
    

    return (
        <>
        <FlexContainer rowReverse={rowReverse? true : false} fullWidthChild>
            <ProjectContentContainer 
            >

                <FlexContainer align="center"  gap="1rem" style={{marginBottom:"10px"}}>
                    <Heading as="h3" size="h3" >FrameKart</Heading>
                        <div style={{backgroundColor:"#69d3e6", padding:'6px 10px', fontSize:"1rem", marginTop:"4px", borderRadius:"20px", width:"fit-content"}}>
                            solo
                        </div>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1rem">
                        <TechStackCard>React JS</TechStackCard>
                        <TechStackCard>CSS</TechStackCard>
                        <TechStackCard>NodeJS</TechStackCard>
                        <TechStackCard>MongoDB</TechStackCard>
                        <TechStackCard>Payment Gateway</TechStackCard>
                    </FlexContainer>
                </PaddingContainer>

                <ParaText1 top="1.5rem" bottom="2rem">This e-commerce website provides a user-friendly platform for online purchases of lenses and glasses. It features an integrated payment gateway for secure transactions. Built with React, the website relies on backend APIs powered by Node.js and Express. Authentication is achieved through JWT (JSON Web Tokens). Additionally, the website offers various filters for an enhanced shopping experience.</ParaText1>
                
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://framekart.netlify.app/')}>Visit Website</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://github.com/Labhk/Gethelens', '_blank')}>View Code</Button1>
                <Button1 style={{marginRight:"18px"}} >Video Demo</Button1>


            </ProjectContentContainer>
            <ProjectImageContainer 
                justify={rowReverse ? "flex-start" : "flex-end"}
                style={{marginTop:"45px"}}
            >
                <ProjectImage src={Project8} alt="project" />
            </ProjectImageContainer>


        </FlexContainer>
        {isVideoModalOpen && (
        <div className="video-modal">
          <div className="video-content">
            <iframe
              title="Video Demo"
              src="https://www.youtube.com/embed/your-video-id"
              frameBorder="0"

              allowFullScreen
            ></iframe>
            <button onClick={closeVideoModal}><LiaWindowCloseSolid style={{color:"#69d3e6"}}/></button>
          </div>
        </div>
      )}
      </>
        
        
    )
}

export default Project