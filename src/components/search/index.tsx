import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchContainer } from './styled'
import IconSearch from '../../images/icons/search.png'

interface SearchProps {
  placeholder: string
}

export const Search = ({ placeholder }:SearchProps) => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState<string | null>(null)

  return (
    <SearchContainer>
      <input type={'text'} placeholder={placeholder}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
        onKeyUp={(e) => {
          if (searchValue !== null && e.code === 'Enter') {
            navigate('/search/movie', { state: { searchValue } })
          }
        }}
      />
      <img src={IconSearch} alt='icon-search' />
    </SearchContainer>
  )
}
