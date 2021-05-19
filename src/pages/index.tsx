import Header from '../components/header';
import HomeContent from '../components/home-content';

import { IndexContainer } from './styled.index';

export default function Home() {
  return (
    <IndexContainer>
      <Header />

      <HomeContent />
    </IndexContainer>
  )
}
