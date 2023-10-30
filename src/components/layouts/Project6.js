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

import Project8 from '../../assets/project6.jpg';
import Video8 from '../../assets/relief.mp4';
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
                    <Heading as="h3" size="h3" >Relief Net</Heading>
                        <div style={{backgroundColor:"#69d3e6", padding:'6px 10px', fontSize:"1rem", marginTop:"4px", borderRadius:"20px", width:"fit-content"}}>
                            solo
                        </div>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1rem">
                        <TechStackCard>React JS</TechStackCard>
                        <TechStackCard>Courier API</TechStackCard>
                        <TechStackCard>NodeJs</TechStackCard>
                        <TechStackCard>MongoDB</TechStackCard>
                        <TechStackCard>CSS</TechStackCard>
                    </FlexContainer>
                </PaddingContainer>

                <ParaText1 top="1.5rem" bottom="2rem">This website, developed with React.js, facilitates connections between individuals in need and volunteer suppliers. A database of registered suppliers is managed. Email services are integrated through the Courier API. The backend relies on Node.js, Express.js, and MongoDB for data management and functionality.</ParaText1>
                
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://relief-net.netlify.app/')}>Visit Website</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://github.com/Labhk/ReliefNet', '_blank')}>View Code</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={openVideoModal}>Video Demo</Button1>


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
              <video controls>
                <source src={Video8} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button onClick={closeVideoModal}><LiaWindowCloseSolid style={{ color: "#69d3e6" }} /></button>
            </div>
          </div>
        )}
      </>
        
        
    )
}

export default Project