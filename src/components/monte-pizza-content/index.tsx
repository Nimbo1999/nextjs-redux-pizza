import { MontePizzaContentContainer, PizzaForm } from './styles.monte-pizza-content';

import RadioButton from '../radio-buttons';

function MontePizzaContent() {
    return (
        <MontePizzaContentContainer>
            <PizzaForm>
                <h2>Selecione o sabor da pizza</h2>

                <RadioButton seleted={ false } value="t1" id="t1">
                    4 Queijos
                </RadioButton>

                <RadioButton seleted={ true } value="t2" id="t2">
                    Mussarela
                </RadioButton>

                <RadioButton seleted={ false } value="t3" id="t3">
                    Calabresa
                </RadioButton>
            </PizzaForm>
        </MontePizzaContentContainer>
    );
}

export default MontePizzaContent;
