import { useState } from 'react';
import styled, { css } from 'styled-components';

const Rail = styled.div<{ checked: boolean | undefined }>`
  position: relative;
  display: inline-block;
  width: 47px;
  height: 26px;
  border-radius: 13px;
  background-color: ${(props) =>
    props.checked ? props.theme.colors.generic.primaryRed : props.theme.colors.specific.disabled};
  cursor: pointer;
  transition: background-color 0.3s;
`;

const Handle = styled.div<{ checked: boolean | undefined }>`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  transition: left 0.3s;

  ${(props) =>
    props.checked &&
    css`
      top: 1px;
      left: 22px;
    `}

  ${(props) =>
    !props.checked &&
    css`
      top: 1px;
      left: 1px;
    `}
`;

type ToggleProps = {
  defaultChecked?: boolean;
  onChange?: (checked?: boolean) => void;
};

const Toggle = ({ defaultChecked, onChange }: ToggleProps) => {
  const [checked, setChecked] = useState<boolean | undefined>(defaultChecked);

  const handleClick = () => {
    if (onChange) onChange(!checked);
    setChecked(!checked);
  };

  return (
    <Rail checked={checked} onClick={handleClick}>
      {checked}
      <Handle checked={checked} />
    </Rail>
  );
};

Toggle.defaultProps = {
  defaultChecked: false,
  onChange: undefined,
};

export default Toggle;
