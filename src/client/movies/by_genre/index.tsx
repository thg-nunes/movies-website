import { CompositList } from '../../../components/movie/getlist'

interface MoviesGenreProps {
  id: number
  typeGenre: string
}

export const MoviesGenre = ({ id, typeGenre }:MoviesGenreProps) => {
  return <CompositList genreId={id} typeGenre={typeGenre} />
}
