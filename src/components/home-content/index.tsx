import { useTheme } from 'styled-components';

import { HomeContentContainer } from './styled.home-content';

import Calendar from '../../assets/icons/calendar';

import SectionTitle from '../section-title';
import RecomendedCard from '../recomended-card';
import Button from '../button';

function HomeContent() {
    const theme = useTheme();

    return (
        <HomeContentContainer>
            <SectionTitle icon={ <Calendar color={theme.pallet.title} /> }>
                Pizza do dia
            </SectionTitle>

            <RecomendedCard
                pizza={{
                    id: 'token',
                    imageUrl: 'pizza1.jpg',
                    ingredients: ['Mussarela', 'Provolone', 'Mussarela', 'Parmesão', 'Catupiry', 'Orégano'],
                    name: '4 Queijos',
                    points: 50,
                    price: 37,
                    size: 'large'
                }}
            />

            <Button
                btnType="secondary"
                variant="full"
                style={{
                    color: theme.pallet.title,
                    margin: `${theme.spacing(3)} 0px`
                }}
            >
                Montar pizza
            </Button>
        </HomeContentContainer>
    );
}

export default HomeContent;
