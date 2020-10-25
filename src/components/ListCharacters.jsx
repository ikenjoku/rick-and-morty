import React from 'react'
import Character from './Character'

export default function ListCharacters({ listOfCharacters }) {
  return (
    <>
      { listOfCharacters.length ? (
        listOfCharacters.map(character => <Character key={character.name} character={character} />)
      ) : '' }
    </>
  )
}
