import styled from 'styled-components';

import { TitleProps } from './section-title.props';

const SectionTitleContainer = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: ${({theme}) => theme.spacing(2)};
`;

const Title = styled.h3<TitleProps>`
    margin-right: ${({theme, hasIcon}) => hasIcon ? theme.spacing(1) : 'none'};
`;

export { SectionTitleContainer, Title }