import styled from "styled-components";

export const Logo = styled.p`
    font-weight: ${({theme}) => theme.fonts.weight.medium};
    color: white;
    & > img{
        height: 100px;
        width: 100px;
    }

    & > span{
        color : ${({theme}) => theme.colors.secondary}; 
    }
`

export const MenuIcon = styled.div`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;

    &:hover{
        font-size: 2.1rem;
    }
`