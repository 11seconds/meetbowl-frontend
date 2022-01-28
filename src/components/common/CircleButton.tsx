import styled, { css } from 'styled-components';
import { MdOutlineIosShare } from 'react-icons/md';

type ColorType = 'red'; // 현재는 단일 색상

type CircleButtonWrapper = {
  color: ColorType;
};

type CircleButtonProps = {
  color: ColorType;
  icon: 'share'; // 현재는 단일 아이콘
};

const CircleButtonWrapper = styled.button<CircleButtonWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;

  ${(props) =>
    props.color === 'red' &&
    css`
      background-color: ${props.theme.colors.generic.secondaryRed};
    `}

  ${(props) =>
    props.color === 'red' &&
    css`
      color: ${props.theme.colors.generic.primaryRed};
    `}
`;

const CircleButton = ({ color, icon }: CircleButtonProps) => (
  <CircleButtonWrapper color={color}>{icon === 'share' && <MdOutlineIosShare />}</CircleButtonWrapper>
);

export default CircleButton;
