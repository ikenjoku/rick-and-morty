import React from 'react'
import Character from './Character'
import { CharacterList } from './styles'

export default function ListCharacters({ listOfCharacters }) {
  return (
    <CharacterList>
      { listOfCharacters.length ? (
        listOfCharacters.map(character => <Character key={character.name} character={character} />)
      ) : '' }
    </CharacterList>
  )
}
