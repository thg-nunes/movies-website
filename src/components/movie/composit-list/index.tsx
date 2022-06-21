import { useState } from 'react'

import { MovieToHomeList } from '../container'
import { Arrow, ContainerHomeList, HomeLisStyle } from './styled'

export interface MovieOriginalData {
  title: string
  release_date: Date
  poster_path: string
  vote_average:number
  id?:number
}

interface DataToComposiMoviestLists {
  listMovies: MovieOriginalData[]
  descriptionList: string
}

export const ComposiMoviestLists = ({ listMovies, descriptionList }:DataToComposiMoviestLists) => {
  const [moveList, setMovieList] = useState<number>(0)
  const offScreenMovies = (listMovies.length * 180) - (window.innerWidth * 0.95)

  const previousMovie = () => {
    setMovieList(moveList + 150)
  }

  const nextMovie = () => {
    setMovieList(moveList - 150)
  }

  return (
    <ContainerHomeList>
      <p className='description-list'>{descriptionList}</p>
      <section className='listmovies'>
        <Arrow onClick={(e) => {
          if (moveList === 0) return e.preventDefault()
          previousMovie()
        }} id='previous' >
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='#00D573'><path d="M24 40 8 24 24 8 26.1 10.1 13.7 22.5H40V25.5H13.7L26.1 37.9Z"/></svg>
        </Arrow>
        <HomeLisStyle style={{
          left: moveList,
          width: listMovies.length * 180
        }}>
          {listMovies.map((movie, index) => (
            <div className='movie' key={index}>
            <MovieToHomeList
              posterPath={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
              id={movie.id}
            />
          </div>
          ))}
        </HomeLisStyle>
        <Arrow isLeft onClick={(e) => {
          if (-moveList >= (offScreenMovies - 50.7)) return e.preventDefault()
          nextMovie()
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='#00D573'><path d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z"/></svg>
        </Arrow>
      </section>
    </ContainerHomeList>
  )
}
