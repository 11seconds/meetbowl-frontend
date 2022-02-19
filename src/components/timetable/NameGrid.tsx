import styled from 'styled-components';

const NameGrid = styled.div.attrs({
  className: 'name-grid',
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 8px;
  width: 100%;
  height: 100%;
`;

export default NameGrid;
