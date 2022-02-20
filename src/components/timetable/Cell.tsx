import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';

// TODO: Storybook 작성

type CellProps = {
  header?: boolean;
  color?: 'default' | 'gray' | string;
};

const Wrapper = styled.div<CellProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.specific.timetableLine};
  border-left: 1px solid ${(props) => props.theme.colors.specific.timetableLine};
  color: ${(props) => props.theme.colors.specific.timetableCellNumber};
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s;

  ${(props) =>
    props.header &&
    css`
      color: ${props.theme.colors.generic.primaryBlack};
    `};

  ${(props) =>
    props.color === 'gray' &&
    css`
      background-color: ${props.theme.colors.specific.disabled};
    `}

  ${(props) =>
    props.color !== 'default' &&
    props.color !== 'gray' &&
    css`
      background-color: ${props.color};
    `}
`;

Wrapper.defaultProps = {
  header: false,
};

const Icon = styled.span`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.2);
`;

const Cell = ({ ...rest }) => (
  <Wrapper {...rest}>
    {!rest.color ? (
      rest.children
    ) : (
      <Icon>
        <MdClose />
      </Icon>
    )}
  </Wrapper>
);

export default Cell;
