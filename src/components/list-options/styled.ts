import styled from 'styled-components'

interface ListOptionsContainerProps {
  menuVisible: boolean
}

export const ListOptionsContainer = styled.section<ListOptionsContainerProps>`
  display: flex;
  flex-direction: column;
  width: 18%;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  left: ${({ menuVisible }): string => {
    if (menuVisible) return '0'
    return '-18%'
  }};
  top: 100%;
  height: 94vh;
  overflow-y: scroll;
  border-top: 1px solid rgba(241, 250, 238, .4);
  background: ${({ theme }) => theme.colors.background.ligthDark};
  transition: 650ms all ease-out;

  span {
    display: block;
    width: 90%;

    text-align: center;
    font-size: ${({ theme }) => theme.font.fontSize.large};

    margin: 0;
    padding: .5rem;
    border-bottom: 1px solid;
  }

  p {
    width: 100%;
    text-align: center;
    padding: 1rem .4rem;
    cursor: pointer;

    :hover {
      text-decoration: underline;
      background: #333533;
      transition: 1s all ease-out;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: #2B2C2B;
  }
  ::-webkit-scrollbar {
      width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    margin: 0 2px;
      background: rgba(241, 250, 238, .4);
  }

  @keyframes listTransition {

  }
`
