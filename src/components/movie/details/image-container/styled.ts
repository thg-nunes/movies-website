import styled from 'styled-components'

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;

  img {
    width: 100%;
    margin-top: -10rem;
  }

  .gradient {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #121212, rgba(18, 18, 18, .2))
  }
`
export const DataToImageContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: .5rem;
  margin-top: -2rem;

  h2 {
    font-size: 2rem;
  }

@media (max-width: 730px) {
  h2 {
    font-size: 1.5rem;
  }

  span {
    font-size: ${({ theme }) => theme.font.fontSize.small};
  }
}
`
