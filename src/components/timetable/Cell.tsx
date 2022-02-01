import styled, { css } from 'styled-components';

// TODO: Storybook 작성

type CellProps = {
  header?: boolean;
  color?: 'default' | 'gray' | string;
};

const Cell = styled.div<CellProps>`
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

  ${(props) =>
    props.header &&
    css`
      color: ${props.theme.colors.generic.primaryBlack};
    `};

  ${(props) =>
    props.color === 'default' &&
    css`
      background-color: '#ffffff';
    `}

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

Cell.defaultProps = {
  header: false,
};

export default Cell;
