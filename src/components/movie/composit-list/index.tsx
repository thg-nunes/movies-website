import { useState } from 'react'
import { MovieToHomeList } from '../home-list'
import { Arrow, ContainerHomeList, HomeLisStyle } from './styled'

interface DataToComposiMoviestLists {
  listMovies: any[]
  descriptionList: string
}

export const ComposiMoviestLists = ({ listMovies, descriptionList }:DataToComposiMoviestLists) => {
  const [moveList, setMovieList] = useState<number>(0)

  const previousMovie = () => {
    setMovieList(moveList - 160)
  }

  return (
    <ContainerHomeList>
      <p className='description-list'>{descriptionList}</p>
      <section className='listmovies'>
        <Arrow onClick={(e) => {
          if (moveList <= -(14 * 160)) return e.preventDefault()
          previousMovie()
        }} id='previous' >
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='#00D573'><path d="M24 40 8 24 24 8 26.1 10.1 13.7 22.5H40V25.5H13.7L26.1 37.9Z"/></svg>
        </Arrow>
        <HomeLisStyle style={{
          left: moveList
        }}>
          {listMovies.map((movie, index) => (
            <div className='movie' key={index}>
            <MovieToHomeList posterPath={movie.poster_path} title={movie.title} releaseDate={movie.release_date} voteAverage={movie.vote_average} />
          </div>
          ))}
        </HomeLisStyle>
      </section>
    </ContainerHomeList>
  )
}
