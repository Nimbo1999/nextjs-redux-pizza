import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

import { MontePizzaContentContainer, PizzaForm, GroupInput, FormFooter, ErrorMsg } from './styles.monte-pizza-content';

import RadioButton from '../radio-buttons';
import Button from '../button';

import { usePizzaContext } from '../../context/PizzaFormContext';

import ChevronRight from '../../assets/icons/chevron-right';
import Check from '../../assets/icons/check';

function MontePizzaContent() {
    const route = useRouter();
    const [error, setError] = useState('');
    const theme = useTheme();
    const pizzaContext = usePizzaContext();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setError('');
        pizzaContext.onChangeValue(pizzaContext.currentStep, event.target.value);
    }

    function previousStep() {
        switch (pizzaContext.currentStep) {
            case 'pizza': {
                return;
            }

            case 'edge': {
                pizzaContext.onChangeValue('edge', '');
                pizzaContext.changeStep('pizza');
                return;
            }

            default: {
                pizzaContext.onChangeValue('size', '');
                pizzaContext.changeStep('edge');
                return;
            }
        }
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        switch (pizzaContext.currentStep) {
            case 'pizza': {
                if (pizzaContext.steps[pizzaContext.currentStep].selectedValue.length === 0) {
                    setError('Escolha uma pizza!');
                    return;
                }

                pizzaContext.changeStep('edge');
                return;
            }

            case 'edge': {
                if (pizzaContext.steps[pizzaContext.currentStep].selectedValue.length === 0) {
                    setError('Escolha uma borda!');
                    return;
                }

                pizzaContext.changeStep('size');
                return;
            }

            default: {
                if (pizzaContext.steps[pizzaContext.currentStep].selectedValue.length === 0) {
                    setError('Escolha um tamanho de pizza!');
                    return;
                }

                pizzaContext.confirmPizzaOrder(
                    Math.floor(Math.random() * 50 + 1),
                    () => route.push('/')
                );
                return;
            }
        }
    }

    useEffect(() => {
        function getStepData() {
            switch (pizzaContext.currentStep) {
                case 'pizza':
                    return pizzaContext.getPizzaStepData();
    
                case 'edge':
                    return pizzaContext.getEdgeStepData();
            
                default:
                    return pizzaContext.getSizeStepData();
            }
        }

        getStepData();
    }, [pizzaContext.currentStep]);

    const currentStepContent = pizzaContext.steps[pizzaContext.currentStep];

    if (!currentStepContent.title || !currentStepContent.values.length) return (
        <MontePizzaContentContainer>
            <h2>Carregando...</h2>
        </MontePizzaContentContainer>
    );

    return (
        <MontePizzaContentContainer>
            <PizzaForm onSubmit={handleSubmit}>
                <h2>{currentStepContent.title}</h2>

                <GroupInput>
                    {currentStepContent.values.map(value => (
                        <RadioButton
                            seleted={ currentStepContent.selectedValue === value }
                            value={value}
                            id={value}
                            name={ `pizza-form-${pizzaContext.currentStep}` }
                            onChange={handleChange}
                        >
                            { value }
                        </RadioButton>
                    ))}
                </GroupInput>

                {!!error && (
                    <ErrorMsg>{error}</ErrorMsg>
                )}

                <FormFooter>
                    <Button variant="link" type="button" onClick={previousStep}>
                        <ChevronRight style={{ transform: 'rotate(180deg)' }} />
                        <span style={{ marginLeft: theme.spacing(1) }}>Voltar</span>
                    </Button>

                    <Button variant="link" type="submit">
                        <span style={{ marginRight: theme.spacing(1) }}>
                            {pizzaContext.currentStep === 'size' ? 'Confirmar' : 'Próximo' }
                        </span>
                        {pizzaContext.currentStep === 'size' ? <Check /> : <ChevronRight /> }
                    </Button>
                </FormFooter>
            </PizzaForm>
        </MontePizzaContentContainer>
    );
}

export default MontePizzaContent;
