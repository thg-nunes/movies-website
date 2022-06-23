import { useNavigate } from 'react-router'
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
        <p key={index} onClick={() => {
          navigate(`/movie/genre/${genresId[index]}`, { state: option })
        }} >{option}</p>
      ))}
    </ListOptionsContainer>
  )
}
