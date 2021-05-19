import styled from 'styled-components';
import { TagContainerProps } from './tag.props';

const TagContainer = styled.div<TagContainerProps>`
    display: flex;

    background: ${({background, theme}) => background ? background : theme.pallet.primary};
    padding: ${({theme}) => theme.spacing(.6)} ${({theme}) => theme.spacing(1)};
    border-radius: 8px;

    small {
        color: ${({color, theme}) => color ? color : theme.pallet.white};
        font-size: .75rem;
        line-height: 1em;
    }
`;

export default TagContainer;
