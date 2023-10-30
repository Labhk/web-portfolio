import styled from "styled-components";

export const SkillsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    max-width: 100%; /* Make the image responsive by scaling it down */
    height: auto; /* Automatically adjust the height */
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: block;
    padding: 0;
  }
`;


export const SkillsIconContainer = styled.div`
  display: flex;
  
  align-items: center;
    margin-top: 2rem;

  & > svg {
    font-size: 4rem; /* You can adjust the size as needed */
    color: #69d3e6;
    padding: 0.3rem; /* You can adjust the padding as needed */
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: block;
    padding: 0;
  }
`;
