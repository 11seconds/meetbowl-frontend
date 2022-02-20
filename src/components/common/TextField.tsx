import styled from 'styled-components';

type TextFieldProps = {
  align?: 'left' | 'center' | 'right';
  width?: number | string;
};

const TextField = styled.input.attrs({
  type: 'text',
})<TextFieldProps>`
  flex-grow: 1;
  padding-bottom: 7px;
  width: ${(props) => props.width}${(props) => typeof props.width === 'number' && 'px'};
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.specific.textFieldBorder};
  border-radius: 0;
  color: ${(props) => props.theme.colors.generic.primaryBlack};
  font-size: 18px;
  font-weight: 700;
  text-align: ${(props) => props.align || 'left'};
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.specific.placeholder};
  }
`;

TextField.defaultProps = {
  align: 'left',
  width: 200,
};

export default TextField;
