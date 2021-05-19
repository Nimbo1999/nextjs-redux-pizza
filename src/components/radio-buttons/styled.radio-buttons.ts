import styled, { css } from 'styled-components';

import { RadioButtonContainerProps } from './radio-buttons.props';

const RadioButtonContainer = styled.label<RadioButtonContainerProps>`
    display: flex;
    justify-content: space-between;

    padding: ${({theme}) => theme.spacing(2)};
    border: 2px solid ${({theme}) => theme.pallet.lightGrey};
    border-radius: ${({theme}) => theme.spacing(1)};
    transition: opacity 250ms ease-out;

    & > svg {
        opacity: 0;
    }

    ${({selected}) => selected && css`
        border: 2px solid ${({theme}) => theme.pallet.success};
        background-color: rgba(0, 168, 78, 0.1);
        color: ${({theme}) => theme.pallet.success};
        font-weight: 600;

        & > svg {
            opacity: 1;
        }
    `}
`;

const RadioInput = styled.input`
`;

export { RadioButtonContainer, RadioInput }