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

import Project1 from '../../assets/ably-realtime.jpg';
import Video7 from '../../assets/ably-realtime.mp4';
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
                  <Heading as="h3" size="h3" >Ably KanbanChat</Heading>
                  <div className='custom-box'>
                            collab
                        </div>
                  </div>
                    
                    
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1rem">
                        <TechStackCard>Next JS</TechStackCard>
                        <TechStackCard>Tailwind</TechStackCard>
                        <TechStackCard>AWS DynamoDB</TechStackCard>
                        <TechStackCard>Ably</TechStackCard>
                        <TechStackCard>Tiny MCE</TechStackCard>
                    </FlexContainer>
                </PaddingContainer>

                <ParaText1 top="1.5rem" bottom="2rem">This application, developed with Next.js and backed by AWS DynamoDB, boasts two primary features: Chat and Workspace. In the Chat section, users can create their channels and engage in real-time conversations. We've integrated a feature-rich text editor from Tiny Cloud to enhance the chat experience.<br/>On the other hand, Workspace provides a collaborative Kanban board powered by Ably Spaces, offering real-time features like live cursors and component locking. This ensures effortless teamwork and task management, with real-time updates seamlessly integrated through Ably channels<br/> This project is a joint effort with the experienced Senior Dev, <a href="https://www.linkedin.com/in/jasonbhatti/" target='blank'  style={{color:"#69d3e6",textDecoration:"none"}}>Jason</a>, who takes charge of the chat feature, while I oversee the Workspace feature.
                </ParaText1>
                
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://ably-hackathon.vercel.app/')}>Visit Website</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://github.com/bhattibytes/Ably-hackathon', '_blank')}>View Code</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={openVideoModal}>Video Demo</Button1>


            </ProjectContentContainer>
            <ProjectImageContainer 
                justify={rowReverse ? "flex-start" : "flex-end"}
                style={{marginTop:"45px"}}
            >
                <ProjectImage src={Project1} alt="project" />
            </ProjectImageContainer>


        </FlexContainer>
        {isVideoModalOpen && (
          <div className="video-modal">
            <div className="video-content">
              <video controls>
                <source src={Video7} type="video/mp4" />
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