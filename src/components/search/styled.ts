import styled from 'styled-components'

export const SearchContainer = styled.section`
  width: 50%;
  height: 35px;
  max-height: 35px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border: 1.5px solid;
  border-radius: 15px;

  input {
    width: 95%;
    padding: 6px;
    background: transparent;
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.font.fontSize.xsmall};
    color: ${({ theme }) => theme.font.colors.white};

    ::placeholder {
      color: ${({ theme }) => theme.font.colors.white};
      letter-spacing: 1px;
    }
  }

  img {
    width: 30px;
    margin: 0;
    cursor: pointer;
  }

@media (max-width: 730px) {
  height: 28px;
  max-height: 28px;

  input {
    ::placeholder {
      font-size: .7rem;
    }
  }
}
`
