import styled from 'styled-components'

export const SkipPageStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5rem;
  width: min-content;
  border-radius: 20px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background.ligthDark};
  padding: .2rem 0;
  :hover {
    background: rgba(64, 64, 64);
    transition: 450ms;
  }

@media (max-width: 730px) {
  width: 88px;

  span {
    font-size:  ${({ theme }) => theme.font.fontSize.small}
  }
}
`
