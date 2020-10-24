import React from 'react';
import { ListCharacters } from './components'
import { StyledApp, PaginationControls } from './components/styles'
import { useRickAndMorty } from './context/RickAndMortyProvider';

function App() {
  const { state: { current_characters, info: { prev, next } }, goBack, goNext } = useRickAndMorty()
  const PrevPage = !!prev
  const NextPage = !!next

  return (
    <StyledApp>
      <ListCharacters
        listOfCharacters={current_characters}
      />
    {current_characters.length ?
        <PaginationControls>
          <button disabled={!PrevPage} onClick={goBack} >Back</button>
          <button disabled={!NextPage} onClick={goNext} >Next</button>
        </PaginationControls> : ''}
    </StyledApp>
  )
}

export default App
