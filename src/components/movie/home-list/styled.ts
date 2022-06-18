import styled from 'styled-components'

export const MovieContainer = styled.div`
  width: 160px;
  max-width: 160px;

  img {
    width: 100%;
    max-width: 180px;
    background-size: cover;
  }

  p {
    font-size: ${({ theme }) =>
      theme.font.fontSize.small
    };
  }

  section {
    p {
      color: #E88124;
      font-size: ${({ theme }) => theme.font.fontSize.normal};
    }
  }
`
