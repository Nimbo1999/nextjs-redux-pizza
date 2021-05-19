import { ChangeEvent, FormEvent, useState } from 'react';
import { useTheme } from 'styled-components';

import { MontePizzaContentContainer, PizzaForm, GroupInput, FormFooter } from './styles.monte-pizza-content';

import RadioButton from '../radio-buttons';
import Button from '../button';

import ChevronRight from '../../assets/icons/chevron-right';

function MontePizzaContent() {
    const theme = useTheme();
    const [selectedValue, setSelectedValue] = useState('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSelectedValue(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(selectedValue);
    }

    return (
        <MontePizzaContentContainer>
            <PizzaForm onSubmit={handleSubmit}>
                <h2>Selecione o sabor da pizza</h2>

                <GroupInput>
                    <RadioButton seleted={ selectedValue === 't1' } value="t1" id="t1" name="pizza-type" onChange={handleChange}>
                        4 Queijos
                    </RadioButton>

                    <RadioButton seleted={ selectedValue === 't2' } value="t2" id="t2" name="pizza-type" onChange={handleChange}>
                        Mussarela
                    </RadioButton>

                    <RadioButton seleted={ selectedValue === 't3' } value="t3" id="t3" name="pizza-type" onChange={handleChange}>
                        Calabresa
                    </RadioButton>
                </GroupInput>

                <FormFooter>
                    <Button variant="link" type="button">
                        <ChevronRight style={{ transform: 'rotate(180deg)' }} />
                        <span style={{ marginLeft: theme.spacing(1) }}>Voltar</span>
                    </Button>

                    <Button variant="link" type="submit">
                        <span style={{ marginRight: theme.spacing(1) }}>Próximo</span>
                        <ChevronRight />
                    </Button>
                </FormFooter>
            </PizzaForm>
        </MontePizzaContentContainer>
    );
}

export default MontePizzaContent;
