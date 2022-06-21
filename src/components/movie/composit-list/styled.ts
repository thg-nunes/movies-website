import styled from 'styled-components'

export const HomeLisStyle = styled.section`
  position: relative;
  display: flex;
  transition: 250ms all ease-in-out;

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
  :first-child{
    width: 95%;
    margin: auto;
  }

  margin-top: 1rem;

  .description-list {
    margin: 0;
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.font.fontSize.large};
  }

  .listmovies {
    position: relative;
    overflow: hidden;
    height: 380px;
  }
`

interface OtherProps {
  isLeft?: boolean
}

export const Arrow = styled.div<OtherProps>`
  right: ${(props): string => {
    if (props.isLeft) return '0'
  }};
  border-left: ${(props): string => {
    if (props.isLeft) return ' 1px solid rgba(241,250,238, .2)'
  }};
  width: 50%;
  bottom: 0;

  position: absolute;
  z-index: 2;
  height: min-content;
  margin-top: .52rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(32,32,32, .7);

  :hover {
    cursor: pointer;
    background: rgba(32,32,32, 1);

    transition: .5ms all ease-in;
  }
`
