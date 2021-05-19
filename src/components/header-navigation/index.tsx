
import { useRouter } from 'next/router';

import { HeaderNavigationContainer, ProgressWrapper, Progress } from './styled.header-navigation';

import Button from '../button';

import Arrow from '../../assets/icons/arrow';

function HeaderNavigation() {
    const router = useRouter();

    return (
        <HeaderNavigationContainer>
            <Button
                variant="small"
                type="button"
                onClick={() => router.back()}
            >
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
