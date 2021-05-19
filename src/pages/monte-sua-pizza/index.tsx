import { MonteSuaPizzaContainer } from './styled.monte-sua-pizza';

import HeaderNavigation from '../../components/header-navigation';
import MontePizzaContent from '../../components/monte-pizza-content';

function MonteSuaPizzaPage() {
    return (
        <MonteSuaPizzaContainer>
            <HeaderNavigation />

            <MontePizzaContent />
        </MonteSuaPizzaContainer>
    );
}

export default MonteSuaPizzaPage;
