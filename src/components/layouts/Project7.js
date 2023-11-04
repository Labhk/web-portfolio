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
import Video7 from '../../assets/flora.mp4';
import Project7 from '../../assets/project7.jpg';
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
                    <Heading as="h3" size="h3" >Florafauna</Heading>
                        <div className='custom-box'>
                            collab
                        </div>
                      </div>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1rem">
                        <TechStackCard>React JS</TechStackCard>
                        <TechStackCard>Firebase</TechStackCard>
                        <TechStackCard>CSS</TechStackCard>
                    </FlexContainer>
                </PaddingContainer>

                <ParaText1 top="1.5rem" bottom="2rem">FloraFauna, a web platform built with React, serves as a resource for locating nature preserves and sanctuaries. Users can filter these based on location and critical factors such as population or scarcity. For added enjoyment, users can filter based on their favorite animals. Once a preserve is selected, users have the option to sponsor (donate), join the community, and share (customized email). The platform uses Firebase for authentication.<br/>
                We won 2nd Place in GreenGlobalHacks Hackathon for this project. Details <a href="https://devpost.com/software/florafauna" target='blank'  style={{color:"#69d3e6",textDecoration:"none"}}>here</a>
                </ParaText1>
                
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://florafauna.netlify.app/')}>Visit Website</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://github.com/Labhk/Florafauna/tree/master', '_blank')}>View Code</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={openVideoModal}>Video Demo</Button1>


            </ProjectContentContainer>
            <ProjectImageContainer 
                justify={rowReverse ? "flex-start" : "flex-end"}
                style={{marginTop:"45px"}}
            >
                <ProjectImage src={Project7} alt="project" />
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