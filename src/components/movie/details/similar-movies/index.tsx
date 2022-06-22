import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_KEY_AND_LANGUAGE, ENDPOINT_TMDB } from '../../../../config/endpoints-tmdb'
import { CompositList } from '../../getlist'

interface SimilarMoviesProps {
  id: number
}

export const SimilarMovies = ({ id }:SimilarMoviesProps) => {
  const [similarMovies, setSimilarMovies] = useState<Array<{
    id: number
    name: string
  }>>([])

  useEffect(() => {
    if (id !== undefined) {
      const getSimilarMovies = async (movieId: number) => {
        const response = await axios.get(`${ENDPOINT_TMDB}/movie/${movieId}?api_key=${API_KEY_AND_LANGUAGE}`)
        const { data } = response
        setSimilarMovies(data.genres)
      }

      getSimilarMovies(id)
    }
  }, [id])

  return (
    <div>
      {similarMovies.length && similarMovies.map((movieData, index) => (
        <CompositList genreId={movieData.id} typeGenre={movieData.name} key={index} />
      ))}
    </div>
  )
}
