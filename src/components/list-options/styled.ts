import styled from 'styled-components'

export const ListOptionsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  p {
    padding: 1rem .4rem;
    cursor: pointer;

    :hover {
      text-decoration: underline;
      background: #333533;
      transition: 1s all ease-out;
    }
  }
`
