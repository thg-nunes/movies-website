import { MovieData } from '../../../interfaces/movie'
import { MovieContainer } from './styled'

export const MovieToHomeList = ({ posterPath, title, releaseDate, voteAverage }:MovieData) => {
  return (
    <MovieContainer>
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt='' />
      <p className='title-movie'>{title}</p>
      <p>{`Lançamento: ${releaseDate}`}</p>
      <section>
        <p>
          {`Classificação: ${voteAverage}`}
        </p>
      </section>
    </MovieContainer>
  )
}
