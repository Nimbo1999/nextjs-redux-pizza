import styled from 'styled-components';
import { RecomendedCardContainerProps } from './recomended-card.props';

const RecomendedCardContainer = styled.div<RecomendedCardContainerProps>`
    display: flex;
    align-items: flex-end;
    position: relative;

    border-radius: 8px;
    height: ${({theme}) => theme.spacing(20)};
    padding: ${({theme}) => theme.spacing(2)};
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const MainContent = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    
    height: 100%;
`;

const MainContentHeader = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    & > h3 {
        color: ${({theme}) => theme.pallet.success};
    }
`;

const PizzaNameAndSize = styled.header`
    display: flex;
    align-items: center;

    h3 {
        margin-right: ${({theme}) => theme.spacing(1)};
        color: ${({theme}) => theme.pallet.white};
    }
`;

const IngredientsWrapper = styled.footer`
    display: flex;
    flex-wrap: wrap-reverse;
    gap: ${({theme}) => theme.spacing(.3)};
`;

export {
    RecomendedCardContainer, MainContent, MainContentHeader, PizzaNameAndSize, IngredientsWrapper
};