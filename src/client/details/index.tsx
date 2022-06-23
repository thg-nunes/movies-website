import { useParams } from 'react-router'

import { MovieDataToDetailst } from '../../interfaces/movie'
import { MovieImageContainer } from '../../components/movie/details/image-container'
import { OtherDetails } from '../../components/movie/details/other'
import { SimilarMovies } from '../../components/movie/details/similar-movies'
import { Header } from '../../components/header'
import { Details } from './styled'

interface DataMovie {
  dataMovie: MovieDataToDetailst
}

export const DetailsMovie = ({ dataMovie }:DataMovie) => {
  const { poster_path, title, release_date, vote_average, overview, popularity, vote_count, genres } = dataMovie
  const { id } = useParams()

  return <Details>
    <Header />
    <MovieImageContainer
      poster_path={poster_path}
      title={title}
      overview={overview}
    />

    <OtherDetails
      release_date={release_date}
      vote_average={vote_average}
      popularity={popularity}
      vote_count={vote_count}
      genres={genres}
    />

    {id !== undefined && <SimilarMovies id={Number(id)} />}
  </Details>
}
