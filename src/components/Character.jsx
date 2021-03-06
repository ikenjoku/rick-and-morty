import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils'
import {
  Info,
  More,
  Name,
  CardBox,
  ImageWrapper,
  DetailWrapper,
  CharacterImage,
  StatusIndicator,
} from './styles'

export default function Character({ character }) {
  const { name, status, location, origin, image, episode, species, gender } = character
  const [locationData, setLocationData] = useState({})
  const [originData, setOriginData] = useState({})
  const [episodeData, setEpisodeData] = useState([])

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        let episodes = episode.map(item => item.split('/')[5] )
        if (episodes.length) {
          const episodeUrl = `${BASE_URL}/episode/[${episodes}]`
          const response = await axios.get(episodeUrl)
          setEpisodeData(response.data)
        }
      } catch (error) {
        console.error('error fetching episode')
      }
    }
    fetchEpisodes()
  }, [episode])

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (location.url) {
          const response = await axios.get(location.url)
          setLocationData(response.data)
        }
      } catch (error) {
        console.error('error fetching location')
      }
    }
    fetchLocation()
  }, [location])

  useEffect(() => {
    const fetchOrigin = async () => {
      try {
        if (origin.url) {
          const response = await axios.get(origin.url)
          setOriginData(response.data)
        }
      } catch (error) {
        console.error('error fetching origin')
      }
    }
    fetchOrigin()
  }, [origin])

  const featuredEpisodes = episodeData.map(item => item.name)

  return (
    <CardBox>
      <ImageWrapper>
        <CharacterImage src={image} alt='character image' />
      </ImageWrapper>
      <DetailWrapper>
        <Name>{ name } <StatusIndicator status={status}></StatusIndicator></Name>
        <More>{ gender } - { species }</More>
        <More><Info>Origin</Info>: { originData.name } <Info>Dimension</Info>: { originData.dimension } <Info>Population</Info>: {originData.residents?.length }</More>
        <More><Info>Current Location</Info>: { locationData.name }</More>
        <More><Info>Featured Chapters</Info>: { featuredEpisodes.join(', ') }</More>
      </DetailWrapper>
    </CardBox>
  )
}
