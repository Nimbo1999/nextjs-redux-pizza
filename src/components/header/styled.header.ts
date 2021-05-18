import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${({theme}) => theme.pallet.primary};
    padding: ${({theme}) => theme.spacing(2)} ${({theme}) => theme.spacing(3)};
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > svg {
        margin-right: ${({theme}) => theme.spacing(2)};
    } 
`;

const MainContent = styled.main`
    display: flex;
    flex-direction: column;

    h2 {
        color: ${({theme}) => theme.pallet.white};
    }

    span {
        color: ${({theme}) => theme.pallet.secondary};
        font-size: 0.75rem;
    }
`;

const PointsContainer = styled.div`
    display: flex;

    & > svg {
        margin-right: ${({theme}) => theme.spacing(1)}
    }
`;

const PointsMain = styled.main`
    display: flex;
    flex-direction: column;

    p {
        color: ${({theme}) => theme.pallet.secondary};

        span {
            color: ${({theme}) => theme.pallet.white};
        }
    }
`;

export { HeaderContainer, TitleContainer, MainContent, PointsContainer, PointsMain }