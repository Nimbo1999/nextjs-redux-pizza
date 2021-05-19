import { useTheme } from 'styled-components';

import { MontePizzaContentContainer, PizzaForm, GroupInput, FormFooter } from './styles.monte-pizza-content';

import RadioButton from '../radio-buttons';
import Button from '../button';

import ChevronRight from '../../assets/icons/chevron-right';

function MontePizzaContent() {
    const theme = useTheme();

    return (
        <MontePizzaContentContainer>
            <PizzaForm>
                <h2>Selecione o sabor da pizza</h2>

                <GroupInput>
                    <RadioButton seleted={ false } value="t1" id="t1">
                        4 Queijos
                    </RadioButton>

                    <RadioButton seleted={ true } value="t2" id="t2">
                        Mussarela
                    </RadioButton>

                    <RadioButton seleted={ false } value="t3" id="t3">
                        Calabresa
                    </RadioButton>
                </GroupInput>

                <FormFooter>
                    <Button variant="link" type="button">
                        <ChevronRight style={{ transform: 'rotate(180deg)' }} />
                        <span style={{ marginLeft: theme.spacing(1) }}>Voltar</span>
                    </Button>

                    <Button variant="link" type="button">
                        <span style={{ marginRight: theme.spacing(1) }}>Próximo</span>
                        <ChevronRight />
                    </Button>
                </FormFooter>
            </PizzaForm>
        </MontePizzaContentContainer>
    );
}

export default MontePizzaContent;
