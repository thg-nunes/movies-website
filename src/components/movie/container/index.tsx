import { Link } from 'react-router-dom'

import { MovieData } from '../../../interfaces/movie'
import { MovieContainer } from './styled'

export const MovieToHomeList = ({ posterPath, title, releaseDate, voteAverage, id }:MovieData) => {
  return (
    <MovieContainer>
      <Link to={`/movie/${id}/details`} className='link-movie-details'>
        <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt='' />
        <p className='title-movie'>{title}</p>
        <p>{`Lançamento: ${releaseDate}`}</p>
        <section>
          <p>
            {`Classificação: ${voteAverage}`}
          </p>
        </section>
      </Link>
    </MovieContainer>
  )
}
