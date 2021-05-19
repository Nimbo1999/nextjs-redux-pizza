import { TagProps } from './tag.props';
import TagContainer from './styled.tag';

function Tag({ color, background, children }: TagProps) {
    return (
        <TagContainer color={color} background={background}>
            <small>{children}</small>
        </TagContainer>
    );
}

export default Tag;
