import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ListCharacters, Footer } from './components'
import {
  Icon,
  Button,
  Headers,
  CardWrapper,
  ListContainer,
} from './components/styles'
import { darkTheme, lightTheme } from './theme'
import { useAppTheme } from './hooks'
import { LIGHT } from './utils'
import { useRickAndMorty } from './context/RickAndMortyProvider';
import { GlobalStyle } from './theme'

export default function App() {
  const { state: { current_characters }} = useRickAndMorty()
  const [theme, toggleTheme, mountedComponent] = useAppTheme()
  const currentTheme = theme === LIGHT ? lightTheme : darkTheme

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider toggleTheme={toggleTheme} theme={currentTheme}>
      <Button theme={theme} onClick={toggleTheme}>
        <Icon>
          {theme === LIGHT ?
            <i className="fas fa-lightbulb"></i>
            : <i className="far fa-lightbulb"></i>}
        </Icon>
      </Button>
      <Headers>
        <h1>The Rick and Morty Characters</h1>
      </Headers>
      <ListContainer>
        <CardWrapper>
          <ListCharacters
            listOfCharacters={current_characters}
          />
        </CardWrapper>
      </ListContainer>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}



