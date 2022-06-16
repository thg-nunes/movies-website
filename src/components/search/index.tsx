import { SearchContainer } from './styled'
import IconSearch from '../../images/icons/search.png'

interface DataToSearchComponent {
  placeholder: string
}

export const Search = ({ placeholder }:DataToSearchComponent) => {
  return (
    <SearchContainer>
      <input type={'text'} placeholder={placeholder} />
      <img src={IconSearch} alt='icon-search' />
    </SearchContainer>
  )
}
