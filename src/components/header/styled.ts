import styled from 'styled-components'

export const HeaderStyle = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 8vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 4;

  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.background.ligthDark};
  border-bottom: 1px solid rgba(241, 250, 238, .4);

  img {
    width: 40px;
  }

  .menu-icon {
    cursor: pointer;
  }
`
