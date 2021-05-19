import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ButtonContainerProps, ButtonVariant } from './button.props';

function getButtonVariant(variant: ButtonVariant): FlattenSimpleInterpolation {
    if(variant === 'full') return css`
        width: 100%;
    `;

    return css`
        width: fit-content;
    `;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
    display: flex;
    align-items: center;

    height: fit-content;
    border: none;
    border-radius: 8px;
    background-color: ${({theme, btnType}) => theme.pallet[btnType]};
    padding: ${({theme}) => theme.spacing(1)} ${({theme}) => theme.spacing(2)};

    font-size: 1rem;
    color: ${({theme}) => theme.pallet.white};
    transition: opacity 200ms linear;

    ${({variant}) => getButtonVariant(variant)}

    &:active {
        opacity: .75;
    }
`;

export { ButtonContainer }