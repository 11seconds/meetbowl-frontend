import { ScheduleBlockDto } from 'apis/dtos';
import CellGrid from './CellGrid';
import Cell from './Cell';

// TODO: Storybook 작성
// TODO: Refactoring
// TODO: 일요일, 월요일 순서 재배치

type CellType = {
  day: number;
  startTime: number;
  startMinute: number;
  endTime: number;
  endMinute: number;
  color?: string;
};

type TimetableProps = {
  timetable: ScheduleBlockDto.ScheduleBlock[];
  userId: string;
  selectedSumitterIds: string[];
  onClick: (cell: CellType, scheduleBlock?: ScheduleBlockDto.ScheduleBlock) => void;
};

const START_HOUR = 6;

const findScheduleBlock = (
  timetable: ScheduleBlockDto.ScheduleBlock[],
  cell: CellType
): ScheduleBlockDto.ScheduleBlock | undefined => {
  return timetable.find((scheduleBlock) => {
    if (scheduleBlock.day === cell.day && scheduleBlock.startTime === cell.startTime) {
      return scheduleBlock;
    }
    return null;
  });
};

function getHighlighted(scheduleBlock: ScheduleBlockDto.ScheduleBlock | undefined, selectedSumitterIds: string[]) {
  let highlighted = false;
  if (scheduleBlock) {
    highlighted = selectedSumitterIds.includes(scheduleBlock?.userId);
  }
  return highlighted;
}

function getCellColor(scheduleBlock: ScheduleBlockDto.ScheduleBlock | undefined, showColor: boolean) {
  let cellColor = 'default';
  if (scheduleBlock) {
    if (showColor) cellColor = scheduleBlock.color;
    else cellColor = 'gray';
  }
  return cellColor;
}

// cell: UI 에서의 칸
// scheduleBlock: cell 에 대응되는 scheduleBlock 객체. 없을 수 있음.
// TODO: userId 를 currentUserID 로 네이밍 변경
const Timetable = ({ timetable, selectedSumitterIds, userId, onClick }: TimetableProps) => {
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

            {Array.from([1, 2, 3, 4, 5, 6, 0]).map((__, day) => {
              const cell: CellType = {
                day,
                startTime,
                startMinute: 0,
                endTime: startTime,
                endMinute: 59,
              };

              const scheduleBlock = findScheduleBlock(timetable, cell);

              const highlighted = getHighlighted(scheduleBlock, selectedSumitterIds);
              const isMine = scheduleBlock?.userId === userId;
              const showColor = selectedSumitterIds.length > 0 ? highlighted : isMine;

              const cellColor = getCellColor(scheduleBlock, showColor);

              return <Cell onClick={() => onClick(cell, scheduleBlock)} color={cellColor} />;
            })}
          </>
        );
      })}
    </CellGrid>
  );
};

export default Timetable;
