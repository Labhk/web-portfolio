import styled from "styled-components";

export const ProjectContentContainer = styled.div`

`;

export const ProjectImageContainer = styled.div`
    display: flex;

    justify-content: ${({ justify }) => justify };

    

    @media ${({ theme }) => theme.breakpoints.mobile}{
        > img {
            width: 100%;
            height: 100%;
            
        }
    }
`;

export const TechStackCard = styled.span`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    margin-bottom: 0.6rem;
    @media ${({ theme }) => theme.breakpoints.mobile}{
        margin-right: 1rem;
    }
`

export const ProjectImage = styled.img`
    width: 90%;
    height: 280px;
    object-fit: cover;
    border-radius: 30px;

    @media ${({ theme }) => theme.breakpoints.mobile}{
        width: 100%;
    }
`



