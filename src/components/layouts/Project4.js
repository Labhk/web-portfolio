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
import Video4 from '../../assets/project4.webm';
import Project4 from '../../assets/project4.jpg';
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
                <div className='project-head'>
                    <Heading as="h3" size="h3" >Mega Hack China</Heading>
                        <div className='custom-box'>
                            collab
                        </div>
                      </div>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1rem">
                        <TechStackCard>React JS</TechStackCard>
                        <TechStackCard>i18next</TechStackCard>
                        <TechStackCard>CSS</TechStackCard>
                    </FlexContainer>
                </PaddingContainer>

                <ParaText1 top="1.5rem" bottom="2rem">This website, crafted with React Vite and CSS, serves as a registration and promotional platform for the Mega China Hack. It boasts a high-quality user interface and offers seamless translation between Chinese and English, achieved with the i18next framework.<br/>
                This website was developed by the entire <a href="https://github.com/MEGA-Hackathon/china.megahack.tech/tree/main" target='blank'  style={{color:"#69d3e6",textDecoration:"none"}}>team</a>., with my specific contributions being the Home, About, and Ideas pages. Currently, I'm volunteer Backend Manager at Mega Hack Community.</ParaText1>
          
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://china.megahack.tech/')}>Visit Website</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://github.com/MEGA-Hackathon/china.megahack.tech/tree/main', '_blank')}>View Code</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={openVideoModal}>Video Demo</Button1>


            </ProjectContentContainer>
            <ProjectImageContainer 
                justify={rowReverse ? "flex-start" : "flex-end"}
                style={{marginTop:"45px"}}
            >
                <ProjectImage src={Project4} alt="project" />
            </ProjectImageContainer>


        </FlexContainer>
        {isVideoModalOpen && (
          <div className="video-modal">
            <div className="video-content">
              <video controls>
                <source src={Video4} type="video/webm" />
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