import { keyframes } from '@emotion/core'

export const fadeIn = keyframes`
  0% { opacity: 0; }
  30% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const slideUp = keyframes`
  0% { opacity: 0; }
  30% {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
