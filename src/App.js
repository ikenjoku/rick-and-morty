import React from 'react';
import { ListCharacters } from './components'
import { StyledApp, PaginationControls, Headers, ListContainer, CardWrapper } from './components/styles'
import { useRickAndMorty } from './context/RickAndMortyProvider';

function App() {
  const { state: { current_characters, info: { prev, next } }, goBack, goNext } = useRickAndMorty()
  const PrevPage = !!prev
  const NextPage = !!next

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
      {current_characters.length ?
        <PaginationControls>
          <button disabled={!PrevPage} onClick={goBack} >Back</button>
          <button disabled={!NextPage} onClick={goNext} >Next</button>
        </PaginationControls> : ''}
      </StyledApp>
  )
}

export default App
