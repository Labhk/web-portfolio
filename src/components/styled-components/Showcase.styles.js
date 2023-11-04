import styled from "styled-components";

export const ShowcaseImageCard = styled.div`
width: 100%; /* Use a percentage value to make it responsive */
padding-top: 2rem;
border-radius: 0.6rem;
position: relative;
overflow: hidden;

@media ${({theme}) => theme.breakpoints.mobile}{
    width: 100%; /* Adjust the width for smaller screens */
    padding-top: 1rem;
    
    > img{
        height: 100%;
        width: 100%;
    }
}
`;

export const ShowcaseParticleContainer = styled.div`
    position:relative;


`

export const IconContainer = styled.div`
    font-size: 1.5rem;
    color: #fff;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover{
        color: ${({theme}) => theme.colors.secondary};
    }
`
