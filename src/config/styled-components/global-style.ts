import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.fontFamily};
    font-size: ${({ theme }) => theme.font.fontSize.normal};
  }

  body {
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background.darkHeavy};
    color: ${({ theme }) => theme.font.colors.white};
  }

   ::-webkit-scrollbar-track {
    background-color: #2B2C2B;
  }
  ::-webkit-scrollbar {
    width: 15px;
    color: rebeccapurple;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    margin: 0 2px;
    background: rgba(241, 250, 238, .4);
  }

  p {
    margin: .4rem 0;
  }
`
