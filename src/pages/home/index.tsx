import React from 'react'
import { Header } from '../../client/header'
import { MostWatchedMovies } from '../../client/movies/popular'

export const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <MostWatchedMovies />
    </React.Fragment>
  )
}
