import styled from 'styled-components'

export const HeaderStyle = styled.div`
  position: relative;
  width: 100%;
  height: 8vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.background.ligthDark};

  img {
    width: 40px;
  }
`
