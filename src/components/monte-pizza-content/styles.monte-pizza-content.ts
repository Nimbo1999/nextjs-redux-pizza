import styled from 'styled-components';
import { FormFooterProps } from './monte-pizza.props';

const MontePizzaContentContainer = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.pallet.primary};
`;

const PizzaForm = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0px ${({theme}) => theme.spacing(3)} ${({theme}) => theme.spacing(3)};
    padding: ${({theme}) => theme.spacing(2)};
    background-color: ${({theme}) => theme.pallet.white};
    border-radius: ${({theme}) => theme.spacing(1)};
    gap: ${({theme}) => theme.spacing(2)};

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

const ErrorMsg = styled.p`
    color: ${({theme}) => theme.pallet.danger};
    margin: ${({theme}) => theme.spacing(2)} 0;
    padding: ${({theme}) => theme.spacing(1)} ${({theme}) => theme.spacing(2)};
    background-color: ${({theme}) => `${theme.pallet.danger}22`};
    border-radius: ${({theme}) => theme.spacing(1)};
    border: 1px solid ${({theme}) => theme.pallet.danger};
`;

export { MontePizzaContentContainer, PizzaForm, GroupInput, FormFooter, ErrorMsg }