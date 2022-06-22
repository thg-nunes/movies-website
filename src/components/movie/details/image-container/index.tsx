import { ENDPOINT_GET_IMAGE } from '../../../../config/endpoints-tmdb'
import { DataToImageContainer, ImageContainer } from './styled'

interface MovieImageContainerProps {
  poster_path: string
  title: string
  overview: string
}

export const MovieImageContainer = ({ poster_path, title, overview }:MovieImageContainerProps) => {
  return (
    <ImageContainer>
      <section className='gradient' />
      <img src={`${ENDPOINT_GET_IMAGE}/w500${poster_path}`} alt="" srcSet="" />

      <DataToImageContainer>
        <h2>{title}</h2>
        <span>Sinopse: {overview}</span>
      </DataToImageContainer>
    </ImageContainer>
  )
}
