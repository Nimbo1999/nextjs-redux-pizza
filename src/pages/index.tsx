import Header from '../components/header';
import HomeContent from '../components/home-content';

import { PizzaOfTheDayContextProvider } from '../context/PizzaOfTheDayContext';

import { IndexContainer } from './styled.index';

export default function Home() {
  return (
    <IndexContainer>
      <PizzaOfTheDayContextProvider>
        <Header />

        <HomeContent />
      </PizzaOfTheDayContextProvider>
    </IndexContainer>
  )
}
