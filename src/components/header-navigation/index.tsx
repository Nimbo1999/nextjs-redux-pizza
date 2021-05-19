
import { HeaderNavigationContainer, ProgressWrapper, Progress } from './styled.header-navigation';

import Button from '../button';

import Arrow from '../../assets/icons/arrow';

function HeaderNavigation() {
    return (
        <HeaderNavigationContainer>
            <Button variant="small" type="button">
                <Arrow />
            </Button>

            <h3>Monte sua pizza 1 / 3</h3>

            <ProgressWrapper>
                <Progress percent={ 30 } />
            </ProgressWrapper>
        </HeaderNavigationContainer>
    );
}

export default HeaderNavigation;
