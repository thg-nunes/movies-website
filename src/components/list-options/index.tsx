import { ListOptionsContainer } from './styled'

interface TypeDataOptions {
  listOptions: string[]
}

export const ListOptions = ({ listOptions }:TypeDataOptions) => {
  return (
    <ListOptionsContainer>
      {listOptions.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
    </ListOptionsContainer>
  )
}
