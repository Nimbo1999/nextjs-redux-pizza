import styled from 'styled-components';
import { ProgressProps } from './header-navigation.props';

const HeaderNavigationContainer = styled.header`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(1.5)};

    padding: ${({theme}) => theme.spacing(3)};
    
    h3 {
        color: ${({theme}) => theme.pallet.white};
        font-weight: 400;
    }
`;

const ProgressWrapper = styled.div`
    width: 100%;
    height: ${({theme}) => theme.spacing(1.5)};
    background: ${({theme}) => theme.pallet.white};
    border-radius: ${({theme}) => theme.spacing(1)};

    overflow: hidden;
`;

const Progress = styled.div<ProgressProps>`
    height: 100%;
    background: ${({theme}) => theme.pallet.secondary};
    border-radius: 0px ${({theme}) => theme.spacing(1)} ${({theme}) => theme.spacing(1)} 0px;
    width: ${({ percent = 0 }) => `${percent}%`};
`;

export { HeaderNavigationContainer, ProgressWrapper, Progress };
