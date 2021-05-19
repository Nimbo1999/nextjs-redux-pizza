import { SectionTitleContainer, Title } from './styled.section-title';

import { SectionTitleProps } from './section-title.props';

function SectionTitle({ icon = null, children, ...rest }: SectionTitleProps) {
    return (
        <SectionTitleContainer {...rest}>
            <Title hasIcon={ !!icon }>
                {children}
            </Title>
            {icon ?? icon}
        </SectionTitleContainer>
    );
}

export default SectionTitle;
