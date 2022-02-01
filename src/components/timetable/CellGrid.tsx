import styled from 'styled-components';

// TODO: Storybook 작성

const CellGrid = styled.div`
  display: grid;
  grid-template-columns: 33px repeat(7, 1fr);
  grid-auto-rows: 38px;
  border-right: 1px solid ${(props) => props.theme.colors.specific.timetableLine};
  border-bottom: 1px solid ${(props) => props.theme.colors.specific.timetableLine};
`;

export default CellGrid;
