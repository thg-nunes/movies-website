import styled from 'styled-components'

export const HomeLisStyle = styled.section`
  position: relative;
  display: flex;

  .movie {
    margin: 0 10px;

    img {
      transform: scale(.9);
      :hover {
        cursor: pointer;
        transform: scale(.93);

        transition: 25ms all ease-in;
      }
    }
  }
`

export const ContainerHomeList = styled.section`
  margin-top: 1rem;

  .description-list {
    margin: 0;
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.font.fontSize.large};
  }

  .listmovies {
    position: relative;
    overflow: hidden;
    border: 1px solid;
  }
`

interface OtherProps {
  isLeft?: boolean
}

export const Arrow = styled.div<OtherProps>`
  right: ${(props): string => {
    if (props.isLeft) return '0'
  }};

  position: absolute;
  z-index: 2;
  height: 94.8%;
  margin-top: .52rem;

  display: flex;
  align-items: center;
  background: rgba(32,32,32, .7);

  :hover {
    cursor: pointer;
    background: rgba(32,32,32, .85);
    transition: .5ms all ease-in;
  }
`
