import { useTheme } from 'styled-components';

import {
    HeaderContainer, TitleContainer, MainContent, PointsContainer, PointsMain
} from './styled.header';

import PizzaLogo from '../../assets/pizza-logo';
import CoinsPiles from '../../assets/icons/coins-piles';

function Header() {
    const theme = useTheme();

    return (
        <HeaderContainer>
            <TitleContainer>
                <PizzaLogo color={ theme.pallet.secondary } />

                <MainContent>
                    <h2>Pizzaria</h2>

                    <span>Created By Matheus Lopes</span>
                </MainContent>
            </TitleContainer>

            <PointsContainer>
                <CoinsPiles color={theme.pallet.secondary} />

                <PointsMain>
                    <p>Pizza points</p>

                    <p><span>0</span> Pontos</p>
                </PointsMain>
            </PointsContainer>
        </HeaderContainer>
    );
}

export default Header;
