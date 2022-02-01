import CellGrid from './CellGrid';
import Cell from './Cell';

// TODO: Storybook 작성

const Timetable = () => (
  <CellGrid>
    <Cell />
    <Cell header> 월 </Cell>
    <Cell header> 화 </Cell>
    <Cell header> 수 </Cell>
    <Cell header> 목 </Cell>
    <Cell header> 금 </Cell>
    <Cell header> 토 </Cell>
    <Cell header> 일 </Cell>

    {Array.from(new Array(19)).map((_, i) => (
      <>
        <Cell header> {i + 6} </Cell>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </>
    ))}
  </CellGrid>
);

export default Timetable;
