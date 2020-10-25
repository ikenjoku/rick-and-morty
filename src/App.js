import React from 'react';
import { ListCharacters, Footer } from './components'
import {
  Headers,
  StyledApp,
  CardWrapper,
  ListContainer,
} from './components/styles'
import { useRickAndMorty } from './context/RickAndMortyProvider';

function App() {
  const { state: { current_characters }} = useRickAndMorty()

  return (
    <StyledApp>
      <Headers>
        <h1>The Rick and Morty API</h1>
      </Headers>
      <ListContainer>
        <CardWrapper>
          <ListCharacters
            listOfCharacters={current_characters}
          />
        </CardWrapper>
      </ListContainer>
      <Footer />
      </StyledApp>
  )
}

export default App
