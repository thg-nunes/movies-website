import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'phosphor-react'

import MovieLogo from '../../images/logo/logo.png'
import { Search } from '../../components/search'
import { ListOptions } from '../../components/list-options'

import { API_KEY_AND_LANGUAGE, ENDPOINT_TMDB } from '../../config/endpoints-tmdb'
import { HeaderStyle } from './styled'

interface GenresMovie {
  genres: {
    id: number
    name: string
  } []
}

export const Header = () => {
  const [allGenres, setGenres] = useState<string[]>([])
  const [genresId, setGenresId] = useState<number[]>([])
  const [menuIsVisible, setMenuIsVisivle] = useState(false)

  useEffect(() => {
    const genresMovie = async () => {
      const genres: string[] = []
      const genresId: number[] = []

      const response = await axios.get(`${ENDPOINT_TMDB}/genre/movie/list?api_key=${API_KEY_AND_LANGUAGE}`)
      const { data }:AxiosResponse<GenresMovie> = response

      data.genres.forEach(genreData => {
        genres.push(genreData.name)
        genresId.push(genreData.id)
      })

      setGenres(genres)
      setGenresId(genresId)
    }

    genresMovie()
  }, [])

  return (
    <HeaderStyle>
      <List
        size={28} weight='bold'
        className='menu-icon'
        onClick={() => setMenuIsVisivle(!menuIsVisible)}
      />
      <Search placeholder='Buscar Filme...' />
      <Link to='/home'>
        <img src={MovieLogo} alt="" />
      </Link>
      {allGenres.length && <ListOptions
        listOptions={allGenres}
        menuVisible={menuIsVisible}
        genresId={genresId}
      />}
    </HeaderStyle>
  )
}
