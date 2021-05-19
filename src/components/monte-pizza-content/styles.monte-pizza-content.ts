import styled from 'styled-components';

const MontePizzaContentContainer = styled.section`
    display: flex;
    padding: ${({theme}) => theme.spacing(3)} 0px ${({theme}) => theme.spacing(4)};
    flex: 1;
`;

const PizzaForm = styled.form`
    margin: 0px ${({theme}) => theme.spacing(3)};
    padding: ${({theme}) => theme.spacing(2)};
    background-color: ${({theme}) => theme.pallet.white};
    border-radius: ${({theme}) => theme.spacing(1)};
`;

export { MontePizzaContentContainer, PizzaForm }