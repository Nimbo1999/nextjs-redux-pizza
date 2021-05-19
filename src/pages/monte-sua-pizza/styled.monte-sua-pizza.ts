import styled from 'styled-components';

const MonteSuaPizzaContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    background-color: ${({theme}) => theme.pallet.primary};
`;

export { MonteSuaPizzaContainer };
