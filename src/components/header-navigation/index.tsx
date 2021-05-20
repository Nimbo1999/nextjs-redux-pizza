
import { useRouter } from 'next/router';

import { HeaderNavigationContainer, ProgressWrapper, Progress } from './styled.header-navigation';

import { usePizzaContext } from '../../context/PizzaFormContext';

import Button from '../button';

import Arrow from '../../assets/icons/arrow';
import { useMemo } from 'react';

function HeaderNavigation() {
    const router = useRouter();

    const { currentStep, steps } = usePizzaContext();
    const arrays = Object.keys(steps);

    const percentage = useMemo(() => {
        return ((arrays.findIndex(item => item === currentStep) + 1) / arrays.length) * 100;
    }, [currentStep]);

    return (
        <HeaderNavigationContainer>
            <Button
                variant="small"
                type="button"
                onClick={() => router.back()}
            >
                <Arrow />
            </Button>

            <h3>Monte sua pizza {arrays.findIndex(item => item === currentStep) + 1} / {arrays.length}</h3>

            <ProgressWrapper>
                <Progress percent={ percentage } />
            </ProgressWrapper>
        </HeaderNavigationContainer>
    );
}

export default HeaderNavigation;
