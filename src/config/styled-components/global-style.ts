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

  p {
    margin: .4rem 0;
  }
`
