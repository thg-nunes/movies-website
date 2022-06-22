import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { DetailsMovie } from '../../../client/details'

import { API_KEY_AND_LANGUAGE, ENDPOINT_TMDB } from '../../../config/endpoints-tmdb'

export const MovieDetail = () => {
  const { id } = useParams()
  const [datailsMovie, setDetailsMovie] = useState(null)

  useEffect(() => {
    const getMovieData = async () => {
      const response = await axios.get(`${ENDPOINT_TMDB}/movie/${id}?api_key=${API_KEY_AND_LANGUAGE}`)
      setDetailsMovie(response.data)
    }

    if (id !== undefined) getMovieData()
  }, [id])

  return (
    datailsMovie !== null && <DetailsMovie
    dataMovie={datailsMovie}
    />
  )
}
