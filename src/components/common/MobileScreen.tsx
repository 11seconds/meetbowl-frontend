import styled, { css } from 'styled-components';

type MobileScreenProps = {
  color?: 'red';
  children: JSX.Element;
};

const Wrapper = styled.div<Pick<MobileScreenProps, 'color'>>`
  height: 100%;
  background-color: #ffffff;
  ${(props) =>
    props.color === 'red' &&
    css`
      background-color: ${props.theme.colors.generic.primaryRed};
    `}
`;

const MobileWidth = styled.div`
  margin: 0 auto;
  max-width: 576px;
`;

const MobileScreen = ({ color, children }: MobileScreenProps) => (
  <Wrapper color={color}>
    <MobileWidth>{children}</MobileWidth>
  </Wrapper>
);

MobileScreen.defaultProps = {
  color: null,
};

export default MobileScreen;
