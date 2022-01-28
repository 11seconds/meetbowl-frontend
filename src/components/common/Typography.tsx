import styled, { css } from 'styled-components';

type SizeType = 'xl' | 'lg' | 'base' | 'sm';
type WeightType = 300 | 400 | 500;

const Typography = styled.div<{ size?: SizeType; weight?: WeightType }>`
  font-weight: ${(props) => props.weight || 400};
  font-size: 16px;

  ${(props) =>
    props.size === 'xl' &&
    css`
      font-size: 22px;
    `}

  ${(props) =>
    props.size === 'lg' &&
    css`
      font-size: 18px;
    `}

  ${(props) =>
    props.size === 'base' &&
    css`
      font-size: 16px;
    `}

  ${(props) =>
    props.size === 'sm' &&
    css`
      font-size: 13px;
    `};
`;

export default Typography;
