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

import Project3 from '../../assets/project3.jpg';
import Video3 from '../../assets/project3.webm';

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
                    <Heading as="h3" size="h3" >VideoSage</Heading>
                        <div className='custom-box'>
                            solo
                        </div>
                      </div>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1rem">
                        <TechStackCard>Next JS</TechStackCard>
                        <TechStackCard>Tailwind</TechStackCard>
                        <TechStackCard>Youbute Browser API</TechStackCard>
                        <TechStackCard>OpenAI</TechStackCard>
                    </FlexContainer>
                </PaddingContainer>

                <ParaText1 top="1.5rem" bottom="2rem">This application is built with Next.js and Tailwind CSS, offering an intuitive video player that accommodates YouTube playlists and video links using the YouTube Browser API. Moreover, it harnesses the power of the OpenAI API to generate video summaries and quizzes, providing a comprehensive and user-friendly experience for those watching the videos.</ParaText1>
                
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://video-sage-42.vercel.app/')}>Visit Website</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://github.com/Labhk/Youtube-AI/tree/main', '_blank')}>View Code</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={openVideoModal}>Video Demo</Button1>


            </ProjectContentContainer>
            <ProjectImageContainer 
                justify={rowReverse ? "flex-start" : "flex-end"}
                style={{marginTop:"45px"}}
            >
                <ProjectImage src={Project3} alt="project" />
            </ProjectImageContainer>


        </FlexContainer>
        {isVideoModalOpen && (
          <div className="video-modal">
            <div className="video-content">
              <video controls>
                <source src={Video3} type="video/webm" />
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