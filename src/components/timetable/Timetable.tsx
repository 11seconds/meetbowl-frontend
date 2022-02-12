import CellGrid from './CellGrid';
import Cell from './Cell';

// TODO: Storybook 작성

type CellType = {
  day: number;
  startTime: number;
  startMinute: number;
  endTime: number;
  endMinute: number;
  color?: string;
};

type TimetableProps = {
  timetable: CellType[];
  onClick: (cell: CellType) => void;
};

const days = ['일', '월', '화', '수', '목', '금', '토', '일'];

const START_HOUR = 6;

const getScheduleBlock = (timetable: CellType[], cell: CellType) => {
  return timetable.find((scheduleBlock: CellType) => {
    if (scheduleBlock.day === cell.day && scheduleBlock.startTime === cell.startTime) {
      return scheduleBlock;
    }
    return null;
  });
};

const Timetable = ({ timetable, onClick }: TimetableProps) => {
  return (
    <CellGrid>
      <Cell />
      <Cell header> 월 </Cell>
      <Cell header> 화 </Cell>
      <Cell header> 수 </Cell>
      <Cell header> 목 </Cell>
      <Cell header> 금 </Cell>
      <Cell header> 토 </Cell>
      <Cell header> 일 </Cell>

      {Array.from(new Array(18)).map((_, i) => {
        const startTime = i + START_HOUR;

        return (
          <>
            <Cell header> {startTime} </Cell>

            {Array.from(new Array(7)).map((__, j) => {
              const day = j;

              const cell: CellType = {
                day,
                startTime,
                startMinute: 0,
                endTime: startTime,
                endMinute: 59,
              };

              const scheduleBlock = getScheduleBlock(timetable, cell);

              return (
                <Cell onClick={() => onClick(cell)} color={scheduleBlock && 'gray'}>
                  {days[day]}요일 {startTime}시
                </Cell>
              );
            })}
          </>
        );
      })}
    </CellGrid>
  );
};

export default Timetable;
