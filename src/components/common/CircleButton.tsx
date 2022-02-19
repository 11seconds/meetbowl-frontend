import styled, { css } from 'styled-components';
import { MdOutlineIosShare } from 'react-icons/md';
import CopyToClipboard from 'react-copy-to-clipboard';

type ColorType = 'red'; // 현재는 단일 색상

type CircleButtonWrapperProps = {
  color: ColorType;
};

type CircleButtonProps = {
  color: ColorType;
  icon: 'share'; // 현재는 단일 아이콘
  url?: string; // 공유버튼으로 활용시
};

const CircleButtonWrapper = styled.button<CircleButtonWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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

const CircleButton = ({ color, icon, url }: CircleButtonProps) => (
  <CopyToClipboard text={url || ''}>
    <CircleButtonWrapper color={color}>{icon === 'share' && <MdOutlineIosShare />}</CircleButtonWrapper>
  </CopyToClipboard>
);

CircleButton.defaultProps = {
  url: '',
};

export default CircleButton;
