import styled from 'styled-components';
import { FormFooterProps } from './monte-pizza.props';

const MontePizzaContentContainer = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${({theme}) => theme.pallet.primary};

    padding: ${({theme}) => theme.spacing(3)} 0px ${({theme}) => theme.spacing(4)};
`;

const PizzaForm = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0px ${({theme}) => theme.spacing(3)};
    padding: ${({theme}) => theme.spacing(2)};
    background-color: ${({theme}) => theme.pallet.white};
    border-radius: ${({theme}) => theme.spacing(1)};

    & > h2 {
        color: ${({theme}) => theme.pallet.text};
        margin-bottom: ${({theme}) => theme.spacing(2)};
    }
`;

const GroupInput = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(2)};
`;

const FormFooter = styled.footer<FormFooterProps>`
    justify-content: ${({ children }) => children.length > 1 ? 'space-between' : 'center' };
    display: flex;
`;

export { MontePizzaContentContainer, PizzaForm, GroupInput, FormFooter }