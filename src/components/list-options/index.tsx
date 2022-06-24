import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { ListOptionsContainer } from './styled'

interface TypeDataOptions {
  listOptions: string[]
  genresId: number[]
  menuVisible: boolean
}

export const ListOptions = ({ listOptions, menuVisible, genresId }:TypeDataOptions) => {
  const navigate = useNavigate()
  return (
    <ListOptionsContainer menuVisible={menuVisible}>
      <span>Gêneros</span>
      {listOptions.map((option, index) => (
        <a className='link-genre-movie' key={index} href={`/movie/genre/${genresId[index]}`} onClick={(e) => {
          e.preventDefault()
          navigate(`/movie/genre/${genresId[index]}`, { state: option })
        }}>{option}</a>
      ))}
    </ListOptionsContainer>
  )
}
