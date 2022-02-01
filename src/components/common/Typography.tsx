import styled, { css } from 'styled-components';

type TypographyProps = {
  size?: 'xl' | 'lg' | 'base' | 'sm';
  weight?: 'regular' | 'medium' | 'bold';
  color?: 'black' | 'red';
};

const Typography = styled.div<TypographyProps>`
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

  ${(props) =>
    props.color === 'black' &&
    css`
      color: ${props.theme.colors.generic.primaryBlack};
    `}

  ${(props) =>
    props.color === 'red' &&
    css`
      color: ${props.theme.colors.generic.primaryRed};
    `}
`;

Typography.defaultProps = {
  size: 'base',
  weight: 'regular',
  color: 'black',
};

export default Typography;
