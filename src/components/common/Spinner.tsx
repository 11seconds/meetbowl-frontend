import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  position: relative;
  border-top: 6px solid ${(props) => props.theme.colors.generic.secondaryRed};
  border-right: 6px solid ${(props) => props.theme.colors.generic.secondaryRed};
  border-bottom: 6px solid ${(props) => props.theme.colors.generic.secondaryRed};
  border-left: 6px solid ${(props) => props.theme.colors.generic.primaryRed};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${spin} 0.9s infinite cubic-bezier(0.3, 0.6, 0.8, 0.3);
  animation: ${spin} 0.9s infinite cubic-bezier(0.3, 0.6, 0.8, 0.3);

  &,
  &:after {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

export default Spinner;
