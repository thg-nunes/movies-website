import { Link } from 'react-router-dom'
import { ListOptionsContainer } from './styled'

interface TypeDataOptions {
  listOptions: string[]
  genresId: number[]
  menuVisible: boolean
}

export const ListOptions = ({ listOptions, menuVisible, genresId }:TypeDataOptions) => {
  return (
    <ListOptionsContainer menuVisible={menuVisible}>
      <span>Gêneros</span>
      {listOptions.map((option, index) => (
        <Link className='link-genre-movie' key={index} to={`/movie/genre/${genresId[index]}`}>
          <p>{option}</p>
        </Link>
      ))}
    </ListOptionsContainer>
  )
}
