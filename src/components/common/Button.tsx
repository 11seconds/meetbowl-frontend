import styled, { css } from 'styled-components';

// 현재는 단일 색상
type ColorType = 'red';
type ButtonSize = 'lg' | 'sm';

const Button = styled.button<{
  color?: ColorType;
  size?: ButtonSize;
  inline?: boolean;
}>`
  border: none;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.color === 'red' &&
    css`
      background-color: ${props.theme.colors.generic.primaryRed};
      color: #ffffff;
    `}

  ${(props) =>
    props.size === 'lg' &&
    css`
      height: 50px;
      font-size: 18px;
    `}

  ${(props) =>
    props.size === 'sm' &&
    css`
      height: 33px;
      font-size: 14px;
    `}

  ${(props) =>
    props.inline
      ? css`
          width: auto;
          display: inline-block;
          padding-left: 18px;
          padding-right: 18px;
        `
      : css`
          width: 100%;
          display: block;
        `}
`;

Button.defaultProps = {
  color: 'red',
  size: 'lg',
};

export default Button;
