import axios, { AxiosResponse } from 'axios'
import { SkipBack } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Footer } from '../../../components/footer'
import { Loading } from '../../../components/loading'
import { ComposiMoviestLists } from '../../../components/movie/composit-list'

import { API_KEY_AND_LANGUAGE, ENDPOINT_TMDB } from '../../../config/endpoints-tmdb'
import { MovieDataToDetailst } from '../../../interfaces/movie'
import { SkipBackStyled } from './styled'

interface AxiosResponseProps {
  results: MovieDataToDetailst[]
}

export const MoviesByGenre = () => {
  const { id } = useParams()
  const { state } = useLocation()

  const [firstList, setFirstList] = useState<MovieDataToDetailst[] | null>(null)
  const [secondList, setSecondList] = useState<MovieDataToDetailst[] | null>(null)

  useEffect(() => {
    const getDataMovieByGenre = async () => {
      const page_4:AxiosResponse<AxiosResponseProps> = await axios.get(`${ENDPOINT_TMDB}/discover/movie/?with_genres=${id}&api_key=${API_KEY_AND_LANGUAGE}&page=4`)
      const page_5:AxiosResponse<AxiosResponseProps> = await axios.get(`${ENDPOINT_TMDB}/discover/movie/?with_genres=${id}&api_key=${API_KEY_AND_LANGUAGE}&page=5`)

      setFirstList([...page_4.data.results])
      setSecondList([...page_5.data.results])
    }

    if (id !== undefined) getDataMovieByGenre()
  }, [id])

  return (
    (firstList && secondList) !== null
      ? (
      <React.Fragment>
        <SkipBackStyled onClick={() => window.history.back()}>
          <section className='skip-page'>
            <SkipBack size={28}
              color='#00D573'
              weight='fill'
            />
            <span>Voltar</span>
          </section>
        </SkipBackStyled>
        <ComposiMoviestLists descriptionList={String(state)} listMovies={firstList} />
        <ComposiMoviestLists descriptionList={String(state)} listMovies={secondList} />
        <Footer />
      </React.Fragment>
        )
      : <Loading />
  )
}
