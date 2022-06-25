import { Eye } from 'phosphor-react'

import { OtherDetailsStyled } from './styled'

interface OtherDetailsProps {
  release_date: Date
  vote_average: number
  popularity: number
  vote_count: number
  genres: {
    id: number
    name: string
  }[]
}

export const OtherDetails = ({ release_date, vote_average, popularity, vote_count, genres }: OtherDetailsProps) => {
  return (
    <OtherDetailsStyled>
      <div>
        <span>{`Lançamento: ${release_date}`}</span>
        <span>
          Classificação: {vote_average} | Votos: {vote_count}
        </span>
      </div>
      <div>
        <span>
          Assistido:
            <Eye
              className='icon'
              size={window.innerWidth <= 868 ? 16 : 24}
            />
            {`${popularity.toLocaleString('pt-BR', { notation: 'compact' })} vezes `}
        </span>
        <span>Gêneros: {genres.map((genre, index) => {
          return `${genre.name}${index === genres.length - 1 ? '' : ', '}`
        })}</span>
      </div>
    </OtherDetailsStyled>
  )
}
