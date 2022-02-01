import styled, { css } from 'styled-components';

type SizeType = 'xl' | 'lg' | 'base' | 'sm';
type WeightType = 'regular' | 'medium' | 'bold';

const Typography = styled.div<{ size?: SizeType; weight?: WeightType }>`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.generic.primaryBlack};

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

  ${(props) =>
    props.weight === 'regular' &&
    css`
      font-weight: 400;
    `}

  ${(props) =>
    props.weight === 'medium' &&
    css`
      font-weight: 500;
    `}

  ${(props) =>
    props.weight === 'bold' &&
    css`
      font-weight: 700;
    `}
`;

export default Typography;
