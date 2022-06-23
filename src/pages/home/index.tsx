import React from 'react'
import { Header } from '../../components/header'
import { DramaMovies } from '../../client/movies/drama'
import { ActionMovies } from '../../client/movies/action'
import { AnimationMovies } from '../../client/movies/animation'

export const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <ActionMovies />
      <DramaMovies />
      <AnimationMovies />
    </React.Fragment>
  )
}
