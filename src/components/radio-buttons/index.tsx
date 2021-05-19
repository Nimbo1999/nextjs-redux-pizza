import { RadioButtonContainer, RadioInput } from './styled.radio-buttons';

import { RadioButtonsProps } from './radio-buttons.props';
import CheckCircle from '../../assets/icons/check-circle';

function RadioButton({ id = 'input-id', value, seleted, children, ...props }: RadioButtonsProps) {
    return (
        <RadioButtonContainer htmlFor={ id } selected={ seleted }>
            {children}

            <CheckCircle />

            <RadioInput
                hidden
                id={ id }
                value={ value }
                type="radio"
                { ...props }
            />
        </RadioButtonContainer>
    )
}

export default RadioButton;
