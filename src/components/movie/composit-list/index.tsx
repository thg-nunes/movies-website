import { useState } from 'react'
import { MovieToHomeList } from '../home-list'
import { Arrow, ContainerHomeList, HomeLisStyle } from './styled'

interface DataToComposiMoviestLists {
  listMovies: any[]
  descriptionList: string
}

export const ComposiMoviestLists = ({ listMovies, descriptionList }:DataToComposiMoviestLists) => {
  // const [lengthToList] = useState<number>(20 * 160)
  const [moveList, setMovieList] = useState<number>(0)
  console.log(moveList)

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
        {/* <Arrow isLeft onClick={() => nextMovie()}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='#00D573'><path d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z"/></svg>
        </Arrow> */}
      </section>
    </ContainerHomeList>
  )
}
