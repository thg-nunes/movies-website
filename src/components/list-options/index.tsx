import { ListOptionsContainer } from './styled'

interface TypeDataOptions {
  listOptions: string[]
  menuVisible: boolean
}

export const ListOptions = ({ listOptions, menuVisible }:TypeDataOptions) => {
  return (
    <ListOptionsContainer menuVisible={menuVisible}>
      <span>Gêneros</span>
      {listOptions.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
    </ListOptionsContainer>
  )
}
