import styled, { css } from 'styled-components';
import Typography from './Typography';

type ColorType = 'red';

type OptionLabelProps = {
  color: ColorType;
  children: string;
};

const OptionLabelWrapper = styled.span<{
  color: ColorType;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 33px;
  border-radius: 16px;
  color: #ffffff;

  ${(props) =>
    props.color === 'red' &&
    css`
      background-color: ${props.theme.colors.generic.primaryRed};
    `}
`;

const OptionLabel = ({ color, children }: OptionLabelProps) => (
  <OptionLabelWrapper color={color}>
    <Typography size="base"> {children} </Typography>
  </OptionLabelWrapper>
);

export default OptionLabel;
