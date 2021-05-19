import { useTheme } from 'styled-components';

import { HomeContentContainer } from './styled.home-content';

import Calendar from '../../assets/icons/calendar';

import SectionTitle from '../section-title';

function HomeContent() {
    const theme = useTheme();

    return (
        <HomeContentContainer>
            <SectionTitle icon={ <Calendar color={theme.pallet.title} /> }>
                Pizza do dia
            </SectionTitle>
        </HomeContentContainer>
    );
}

export default HomeContent;
