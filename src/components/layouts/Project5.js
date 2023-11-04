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


import Project5 from '../../assets/project5.jpg';
import Video5 from '../../assets/project5.webm';
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
                    <Heading as="h3" size="h3" >Product Peek</Heading>
                        <div className='custom-box'>
                            solo
                        </div>
                      </div>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1rem">
                        <TechStackCard>Angular</TechStackCard>
                        <TechStackCard>Marterial UI</TechStackCard>
                        <TechStackCard>NodeJS</TechStackCard>
                        <TechStackCard>Mongodb</TechStackCard>
                        <TechStackCard>JWT</TechStackCard>
                    </FlexContainer>
                </PaddingContainer>

                <ParaText1 top="1.5rem" bottom="2rem">This application, developed using Angular, offers comprehensive product management capabilities. Users can efficiently manage products by displaying, adding, viewing, and editing product details with ease. The user interface is styled with Material UI, providing a modern and user-friendly design. The application goes a step further by incorporating robust form error validation, ensuring data accuracy and integrity.<br/>
                The backend, is build using Node.js, MongoDB, and Express.js, to manage data and provide seamless functionality. Authentication is achieved through the use of JWT, enhancing security and access control for users.</ParaText1>
                
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://product-peek.vercel.app/')}>Visit Website</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={() => window.open('https://github.com/Labhk/product-peek/tree/main', '_blank')}>View Code</Button1>
                <Button1 style={{marginRight:"18px"}} onClick={openVideoModal}>Video Demo</Button1>


            </ProjectContentContainer>
            <ProjectImageContainer 
                justify={rowReverse ? "flex-start" : "flex-end"}
                style={{marginTop:"45px"}}
            >
                <ProjectImage src={Project5} alt="project" />
            </ProjectImageContainer>


        </FlexContainer>
        {isVideoModalOpen && (
          <div className="video-modal">
            <div className="video-content">
              <video controls>
                <source src={Video5} type="video/webm" />
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