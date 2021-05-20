import { MonteSuaPizzaContainer } from './styled.monte-sua-pizza';

import HeaderNavigation from '../../components/header-navigation';
import MontePizzaContent from '../../components/monte-pizza-content';

import { PizzaContextProvider } from '../../context/PizzaFormContext';

function MonteSuaPizzaPage() {
    return (
        <PizzaContextProvider>
            <MonteSuaPizzaContainer>
                <HeaderNavigation />

                <MontePizzaContent />
            </MonteSuaPizzaContainer>
        </PizzaContextProvider>
    );
}

export default MonteSuaPizzaPage;
