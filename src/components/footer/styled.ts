import styled from 'styled-components'

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(115, 119, 114);
  margin-top: 1rem;
  padding: 1rem;

  .linkadin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    a {
      display: flex;
      align-items: center;
      margin: 0 .5rem;
      color: ${({ theme }) => theme.font.colors.white};
    }

    img {
      margin: 0 .2rem;
    }
  }

  .linkadinlogo {
    width: 2rem;
  }

  .stacks {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 150px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 .5rem;
    }

    div img {
      width: 2rem;
      margin-left: .25rem;
    }
  }
`
