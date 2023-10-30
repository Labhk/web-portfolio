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
                    <Heading as="h3" size="h3" >Ably KanbanChat</Heading>
                        <div style={{backgroundColor:"#69d3e6", padding:'6px 10px', fontSize:"1rem", marginTop:"4px", borderRadius:"20px", width:"fit-content"}}>
                            collab
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

                <ParaText1 top="1.5rem" bottom="2rem">This application, developed with Next.js and backed by AWS DynamoDB, boasts two primary features: Chat and Workspace. In the Chat section, users can create their channels and engage in real-time conversations. We've integrated a feature-rich text editor from Tiny Cloud to enhance the chat experience.<br/>On the other hand, Workspace offers a collaborative Kanban board with live features build using Ably Spaces. This includes live cursors and component locking, enabling seamless teamwork.<br/> This project is a joint effort with the experienced Senior Dev, <a href="https://www.linkedin.com/in/jasonbhatti/" target='blank'  style={{color:"#69d3e6",textDecoration:"none"}}>Jason</a>, who takes charge of the chat feature, while I oversee the Workspace feature. The project is currently a work in progress. We've successfully implemented all the functions but are yet to finalize the UI.
                </ParaText1>
                
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://ably-hackathon.vercel.app/')}>Visit Website</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://github.com/bhattibytes/Ably-hackathon', '_blank')}>View Code</Button1>
                <Button1 style={{marginRight:"18px"}} >Video Demo</Button1>


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