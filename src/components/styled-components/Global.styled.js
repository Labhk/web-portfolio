import styled from "styled-components";

export const MainBody = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
`

export const Container = styled.div`
    max-width: 1280px;
    margin: auto;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${(props) => props.center};
    align-items: ${(props) => props.align || ''};
    gap: ${({ gap }) => gap};
    flex-direction: ${({rowReverse}) => rowReverse ?  'row-reverse' : 'row'};

    & > div {
        flex: ${({ fullWidthChild }) => fullWidthChild && 1};
        
    }

    @media ${({ theme }) => theme.breakpoints.mobile}{
        display: ${({ responsiveFlex }) => responsiveFlex ? 'flex' : 'block'};
        flex-direction: ${({ responsiveDirection}) => responsiveDirection};
        justify-content: center;
        text-align: center;
    }
`

export const PaddingContainer = styled.div`
    padding-top: ${({top}) => top};
    padding-bottom: ${({bottom}) => bottom};
    padding-left: ${({left}) => left};
    padding-right: ${({right}) => right};

    @media ${({ theme }) => theme.breakpoints.mobile}{
        padding-top: ${({responsiveTop}) => responsiveTop};
        padding-bottom: ${({responsiveBottom}) => responsiveBottom};
        padding-left: ${({responsiveLeft}) => responsiveLeft};
        padding-right: ${({responsiveRight}) => responsiveRight};
    }
`

export const Heading = styled(PaddingContainer)`
    color:${({theme}) => theme.colors.white};
    text-align: ${({align}) => align};
    font-size: ${({size}) => {
        switch(size){
            case 'h1':
                return '4rem';
            
            case 'h2':
                return '2.6rem';

            case 'h3':
                return '2rem';
            
            case 'h4':
                return '1.2rem';

            default:
                return;
        }
    }};

    @media ${({ theme }) => theme.breakpoints.mobile}{
        font-size: ${({size}) => {
            switch(size){
                case 'h1':
                    return '2.5rem';
                
                case 'h2':
                    return '2rem';
    
                case 'h3':
                    return '1.5rem';
                
                case 'h4':
                    return '1rem';
    
                default:
                    return;
            }
        }};
        text-align: center;
    }

`

export const BlueText = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`

export const ParaText = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.para_text_color};
    line-height: 2rem;
`

export const ParaText1 = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.para_text_color};
    line-height: 1.5rem;
    @media (max-width: 768px){
        text-align: justify;   
    }
    
`

export const Particle = styled.img`
    position: absolute;
    top: ${({ initialTop }) => initialTop};
    left: ${({ initialLeft }) => initialLeft};
    right: ${({ initialRight }) => initialRight};
    bottom: ${({ initialBottom }) => initialBottom};
    transform: rotate(${({ rotate }) => rotate});

    @media (max-width: 768px){
        display: none;
    }
`;


export const IconContainer = styled.div`
    color: ${({color, theme}) => {
        switch(color){
            case 'white':
                return theme.colors.white;

            case 'blue':
                return theme.colors.secondary;

            default:
                return;
        }
    }};
    font-size: ${({size}) => size};
`

export const Button = styled.a`
    display: inline-block;
    width: max-content;
    padding: 1rem 2rem;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary_light};
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease; 

    &:hover{
        color: ${({ theme }) => theme.colors.primary_light};
        background-color: ${({ theme }) => theme.colors.white};
    }
`

export const Button1 = styled.a`
    display: inline-block;
    width: max-content;
    padding: 0.8rem 1.6rem;
    color: ${({theme}) => theme.colors.secondary};
    background-color: ${({theme}) => theme.colors.primary_light};
    border: 2px solid ${({theme}) => theme.colors.secondary};
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease; 
    margin-bottom: 0.6rem;

    &:hover{
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`