import axios from 'axios'
import { useState } from 'react'

import { ComposiMoviestLists } from '../../../components/movie/composit-list'
import { ContainerHomeList } from '../../../components/movie/composit-list/styled'
import { API_KEY_AND_LANGUAGE, ENDPOINT_TMDB } from '../../../config/endpoints-tmdb'

export const MostWatchedMovies = () => {
  const [listMovies, setListMovies] = useState<any>([])

  useState(() => {
    const getMovies = async () => {
      const response = await axios.get(`${ENDPOINT_TMDB}/movie/popular?api_key=${API_KEY_AND_LANGUAGE}`)
      setListMovies(response.data.results)
    }
    getMovies()
  })

  return (
    <ContainerHomeList>
     <ComposiMoviestLists listMovies={listMovies} descriptionList='Populares da TMDB' />
    </ContainerHomeList>
  )
}
