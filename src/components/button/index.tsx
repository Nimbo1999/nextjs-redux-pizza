import { ButtonContainer } from './styled.button';
import { ButtonProps } from './button.props';

function Button({
    btnType = 'primary', variant = 'default', children, ...props
}: ButtonProps) {

    return (
        <ButtonContainer {...props} btnType={ btnType } variant={ variant }>
            {children}
        </ButtonContainer>
    )
}

export default Button;
