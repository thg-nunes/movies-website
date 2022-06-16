import { HeaderStyle } from './styled'
import MovieLogo from '../../images/logo/logo.png'
import { Search } from '../../components/search'
import { ListOptions } from '../../components/list-options'
import { Link } from 'react-router-dom'

export const Header = () => {
  const optionsMovie = ['Ação', 'Comédia', 'Terror']

  return (
    <HeaderStyle>
      <Link to='/home'>
        <img src={MovieLogo} alt="" />
      </Link>
      <Search placeholder='Buscar Filme...' />
      <ListOptions listOptions={optionsMovie}/>
    </HeaderStyle>
  )
}
