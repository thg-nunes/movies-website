import axios, { AxiosResponse } from 'axios'
import { SkipBack } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Loading } from '../../../components/loading'
import { ComposiMoviestLists } from '../../../components/movie/composit-list'
import { API_KEY_AND_LANGUAGE, ENDPOINT_TMDB } from '../../../config/endpoints-tmdb'
import { SkipPageStyled } from './styled'

interface useLocationProps {
  state?: {
    searchValue?: string
  }
}

interface AxiosResponseProps {
  results: {
    name: string
    id: number
  } []
}

export const SearchMovie = () => {
  const { state }:useLocationProps = useLocation()
  const [moviesData, setMoviesData] = useState([])

  useEffect(() => {
    if (state !== Object) {
      const getDataFromSearchMovie = async () => {
        const response:AxiosResponse<AxiosResponseProps> = await axios.get(`${ENDPOINT_TMDB}/search/keyword?api_key=${API_KEY_AND_LANGUAGE}&query=${state.searchValue}`)
        const { data } = response

        await data.results.forEach(async (result) => {
          await axios.get(`${ENDPOINT_TMDB}/movie/${result.id}?api_key=${API_KEY_AND_LANGUAGE}`)
            .then(res => {
              setMoviesData([...moviesData, res.data])
            })
            .catch(err => {
              if (err) throw new Error('Erro ao buscar filme')
            })
        })
      }
      getDataFromSearchMovie()
    }
  }, [])

  console.log(moviesData)

  return (
    (moviesData.length !== 0)
      ? <React.Fragment>
          <SkipPageStyled onClick={() => window.history.back()}>
            <SkipBack size={window.innerWidth <= 730 ? 22 : 28}
              color='#00D573'
              weight='fill'
            />
            <span>Voltar</span>
          </SkipPageStyled>
        <ComposiMoviestLists listMovies={moviesData} descriptionList='Semelhante a sua busca' />
      </React.Fragment>
      : <Loading />
  )
}
