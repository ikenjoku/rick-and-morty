import React, { createContext, useContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import { actions } from './RickAndMortyProvider.actions'
import { BASE_URL } from '../utils'

const {
  FETCHING_CHARACTER,
  FETCHED_CHARACTER,
  ERROR_FETCHING_CHARACTER
} = actions

export const initialState = {
  info: {},
  current_characters: [],
  fetchingCharacters: true,
  errorFetchingCharacters: false,
}

export const RickAndMortyReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCHED_CHARACTER: {
      return {
        ...state,
        info: payload.info,
        current_characters: payload.results,
        fetchingCharacters: false,
        errorFetchingCharacters: false,
      }
    }
    case FETCHING_CHARACTER: {
      return {
        ...state,
        fetchingCharacters: true,
      }
    }
    case ERROR_FETCHING_CHARACTER: {
      return {
        ...state,
        fetchingCharacters: false,
        errorFetchingCharacters: true,
      }
    }
    default:
      return state
  }
}

const RickAndMortyContext = createContext()

const useRickAndMorty = () => {
  const context = useContext(RickAndMortyContext)
  if (!context) {
    console.error(' Please call within a RickAndMortyProvider')
    throw new Error('useRickAndMorty must be used within a RickAndMortyProvider')
  }
  return context
}

const RickAndMortyProvider = (props) => {
  const [state, dispatch] = useReducer(RickAndMortyReducer, initialState)

  const fetchCharacters = async (page) => {
    try {
      //get characers
      const response = await axios.get(`${BASE_URL}/character?page=${page || 1}`)
      const  { info, results } = response.data
      console.log('fetching')
      console.log('info', info)
      console.log('results', results)
      dispatch({ type: FETCHED_CHARACTER, payload: { info, results } })
    } catch (error) {
      // error
      console.log('error')
      dispatch({ type: ERROR_FETCHING_CHARACTER })
    }
  }

  const fetchCharactersByUrl = async (url) => {
    try {
      //get characers
      const response = await axios.get(url)
      const  { info, results } = response.data
      console.log('fetching')
      console.log('info', info)
      console.log('results', results)
      dispatch({ type: FETCHED_CHARACTER, payload: { info, results } })
    } catch (error) {
      // error
      console.log('error')
      dispatch({ type: ERROR_FETCHING_CHARACTER })
    }
  }

  const goNext = () => {
    const { next } = state.info
    if (next) {
      fetchCharactersByUrl(next)
    }
  }

  const goBack = () => {
    const { prev } = state.info
    if (prev) {
      fetchCharactersByUrl(prev)
    }
  }

  function goToPage(page) {
    if (Number(page)) {
      fetchCharacters(page)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <RickAndMortyContext.Provider
      value={{
        state,
        dispatch,
        goBack,
        goNext,
        goToPage
      }}
      {...props}
    />
  )
}

export { RickAndMortyProvider, useRickAndMorty, RickAndMortyContext }