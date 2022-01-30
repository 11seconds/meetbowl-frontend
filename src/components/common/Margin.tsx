import styled, { css } from 'styled-components';

type MarginProps = {
  direction?: 'vertical' | 'horizontal';
  size: number;
};

const Margin = styled.div<MarginProps>`
  ${(props) =>
    (props.direction === 'vertical' || !props.direction) &&
    css`
      height: ${props.size}px;
    `}

  ${(props) =>
    props.direction === 'horizontal' &&
    css`
      width: ${props.size}px;
    `}
`;

export default Margin;
