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

import Project2 from '../../assets/Project2.jpg';
import Video3 from '../../assets/project2.webm';
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
                    <Heading as="h3" size="h3" >MedStudySign.ai</Heading>
                        <div className='custom-box'>
                            collab
                        </div>
                      </div>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1rem">
                        <TechStackCard>Next JS</TechStackCard>
                        <TechStackCard>Firebase</TechStackCard>
                        <TechStackCard>Dropbox Sign API</TechStackCard>
                        <TechStackCard>OpenAI</TechStackCard>
                        <TechStackCard>Tailwind</TechStackCard>
                    </FlexContainer>
                </PaddingContainer>

                <ParaText1 top="1.5rem" bottom="2rem">This application is developed with Next.js & Tailwind CSS, our application leverages Google's Firebase for authorization and document storage. We integrated the Dropbox Sign API for electronic signatures.We used Open AI To generate patient-friendly AI summaries of consent forms.<br/>
                This project is a joint effort with the experienced Senior Data Scientist, <a href="https://www.linkedin.com/in/mitchell-coplan/" target='blank'  style={{color:"#69d3e6",textDecoration:"none"}}>mitchell coplan</a>, who takes charge of the project report and AI feature, while I oversee the full stack application and dropbox sign api intergration.</ParaText1>
                
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://main.d3mqfaen5l53lz.amplifyapp.com/')}>Visit Website</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://github.com/Labhk/MedStudySign.ai', '_blank')}>View Code</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={openVideoModal}>Video Demo</Button1>


            </ProjectContentContainer>
            <ProjectImageContainer 
                justify={rowReverse ? "flex-start" : "flex-end"}
                style={{marginTop:"45px"}}
            >
                <ProjectImage src={Project2} alt="project" />
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