import styled from 'styled-components';

const MonteSuaPizzaContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${({theme}) => theme.pallet.primary};
`;

export { MonteSuaPizzaContainer };
