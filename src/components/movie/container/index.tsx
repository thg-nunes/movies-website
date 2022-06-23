import { Link } from 'react-router-dom'

import { MovieData } from '../../../interfaces/movie'
import { MovieContainer } from './styled'

export const MovieToHomeList = ({ poster_path, title, release_date, vote_average, id }:MovieData) => {
  return (
    <MovieContainer>
      <Link to={`/movie/${id}/details`} className='link-movie-details'>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='' />
        <p className='title-movie'>{title}</p>
        <p>{`Lançamento: ${release_date}`}</p>
        <section>
          <p>
            {`Classificação: ${vote_average}`}
          </p>
        </section>
      </Link>
    </MovieContainer>
  )
}
