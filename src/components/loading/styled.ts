import styled from 'styled-components'

export const LoadingStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(24, 24, 24, .35);
  z-index: 4;

  .loading {
    width: 40px;
    height: 40px;
    border: 4px solid ${({ theme }) => theme.font.colors.green};
    border-top: 4px solid rgba(255, 255, 255, .2);
    border-radius: 50%;
    animation: loading-animation 1.5s infinite linear;
  }


@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
}
`
