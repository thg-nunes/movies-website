import styled from 'styled-components'

export const SkipBackStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: .4rem 0;
  padding-left: 1.7rem;

  border-bottom: 1px solid rgba(128, 128, 128, .2);

  span {
    margin: 0;
  }

  .skip-page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7%;
    border-radius: 20px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.background.ligthDark};
    padding: .2rem 0;
    :hover {
      background: rgba(64, 64, 64);
      transition: 450ms;
    }
  }
`
