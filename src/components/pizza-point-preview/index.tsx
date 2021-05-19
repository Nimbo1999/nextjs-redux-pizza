import { PizzaPointPreviewContainer, Stack, Content } from './styled.pizza-point-preview';

import PointsPreviewStar from '../../assets/points-preview-star';

function PizzaPointPreview({ children }) {
    return (
        <PizzaPointPreviewContainer>
            <Stack>
                <PointsPreviewStar />

                <Content>
                    <h4>{children}</h4>

                    <span>Pontos</span>
                </Content>
            </Stack>
        </PizzaPointPreviewContainer>
    )
}

export default PizzaPointPreview;
