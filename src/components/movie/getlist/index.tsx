import axios from 'axios'
import { useState } from 'react'

import { GetMovieData } from '../../../interfaces/movie/get-data'
import { ComposiMoviestLists } from '../../../components/movie/composit-list'
import { ContainerHomeList } from '../../../components/movie/composit-list/styled'
import { API_KEY_AND_LANGUAGE, ENDPOINT_TMDB } from '../../../config/endpoints-tmdb'
import { Loading } from '../../loading'

export const CompositList = ({ genreId, typeGenre }: GetMovieData) => {
  const [listMovies, setListMovies] = useState([])
  useState(() => {
    const getMovies = async () => {
      const response = await axios.get(`${ENDPOINT_TMDB}/discover/movie?with_genres=${genreId}&api_key=${API_KEY_AND_LANGUAGE}`)
      setListMovies(response.data.results)
    }
    getMovies()
  })

  return (
    <ContainerHomeList>
      {!listMovies.length && <Loading />}
     <ComposiMoviestLists listMovies={listMovies} descriptionList={typeGenre} />
    </ContainerHomeList>
  )
}
