import React from 'react'
import { Header } from '../../components/header'
import { DramaMovies } from '../../client/movies/drama'
import { ActionMovies } from '../../client/movies/action'
import { AnimationMovies } from '../../client/movies/animation'
import { Footer } from '../../components/footer'

export const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <ActionMovies />
      <DramaMovies />
      <AnimationMovies />
      <Footer />
    </React.Fragment>
  )
}
