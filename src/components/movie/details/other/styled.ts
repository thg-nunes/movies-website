import styled from 'styled-components'

export const OtherDetailsStyled = styled.section`
  width: 100%;
  height: min-content;
  margin: auto;

  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    span {
      margin: 0 1rem;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      margin: 0 .3rem;
    }
  }

@media (max-width: 1062px) {
  span {
    font-size: ${({ theme }) => theme.font.fontSize.small}
  }
}

@media (max-width: 931px) {
  span {
    font-size: ${({ theme }) => theme.font.fontSize.xsmall}
  }
}

@media (max-width: 868px) {
  div {
      flex-direction: column;
    span {
      margin: .4rem 0;
    }
  }
}
`
