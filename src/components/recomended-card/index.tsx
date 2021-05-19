import { useTheme } from 'styled-components';

import Tag from '../tag';
import Button from '../button';
import PizzaPointPreview from '../pizza-point-preview';

import {
    RecomendedCardContainer, MainContent, MainContentHeader, PizzaNameAndSize, IngredientsWrapper
} from './styled.recomended-card';
import { RecomendedCardProps } from './recomended-card.props';

function RecomendedCard({ pizza, ...rest }: RecomendedCardProps) {
    console.log(pizza);
    const theme = useTheme();

    if (!pizza) return (
        <p>Hoje não tem pizza do dia.</p>
    );

    /**
     * This function only exists because i need to mock the image from the backend.
     * @returns {string} Image
     */
    function formatImage(): string {
        return `/pizzaOfDay/${pizza.imageUrl}`;
    }

    function getSizeLabel() {
        switch (pizza.size) {
            case 'family':
                return 'Família';

            case 'large':
                return 'Grande';

            case 'medium':
                return 'Média';
        
            default:
                return 'Pequena';
        }
    }

    return (
        <RecomendedCardContainer {...rest} imageUrl={ formatImage() }>
            <MainContent>
                <MainContentHeader>
                    <PizzaNameAndSize>
                        <h3>{pizza.name}</h3>

                        <Tag>{ getSizeLabel() }</Tag>
                    </PizzaNameAndSize>

                    <h3>{(pizza.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                </MainContentHeader>

                <IngredientsWrapper>
                    {pizza.ingredients.map(ingredient => (
                        <Tag background={ theme.pallet.danger }>{ingredient}</Tag>
                    ))}
                </IngredientsWrapper>
            </MainContent>

            <Button type="button" btnType="success" style={{ fontSize: '1rem', marginLeft: theme.spacing(1) }}>
                Quero
            </Button>

            <PizzaPointPreview>
                {pizza.points}
            </PizzaPointPreview>
        </RecomendedCardContainer>
    );
}

export default RecomendedCard;
