import styled from 'styled-components';

const PizzaPointPreviewContainer = styled.div`
    position: absolute;
    top: ${({theme}) => theme.spacing(1)};
    right: ${({theme}) => theme.spacing(2)};
`;

const Stack = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg, & > div {
        position: absolute;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4, span {
        color: ${({theme}) => theme.pallet.white};
        line-height: 1em;
    }

    span {
        font-size: 0.857rem;
    }
`;

export { PizzaPointPreviewContainer, Stack, Content }