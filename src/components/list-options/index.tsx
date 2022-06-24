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
        <a className='link-genre-movie' key={index} href={`/movie/genre/${genresId[index]}`}>{option}</a>
      ))}
    </ListOptionsContainer>
  )
}
