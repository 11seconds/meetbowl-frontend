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
  scheduleBlocks: ScheduleBlockDto.ScheduleBlock[];
  currentUserId: string;
  selectedSubmitterId: string | null;
  onClick: (cell: CellType, scheduleBlock?: ScheduleBlockDto.ScheduleBlock) => void;
};

const START_HOUR = 6;

const isSameTime = (scheduleBlock: ScheduleBlockDto.ScheduleBlock, cell: CellType) => {
  // TODO: 추후 분까지 추가되어야 함
  return (
    scheduleBlock.day === cell.day &&
    scheduleBlock.startTime === cell.startTime &&
    scheduleBlock.endTime === cell.endTime
  );
};

const findScheduleBlocksByCell = (scheduleBlocks: ScheduleBlockDto.ScheduleBlock[], cell: CellType) => {
  return scheduleBlocks.find((block) => isSameTime(block, cell));
};

const findScheduleBlockByCellAndUserId = (
  scheduleBlocks: ScheduleBlockDto.ScheduleBlock[],
  cell: CellType,
  userId: string | null
) => {
  return scheduleBlocks.find((block) => isSameTime(block, cell) && block.userId === userId);
};

const getCellColor = (
  scheduleBlocks: ScheduleBlockDto.ScheduleBlock[],
  cell: CellType,
  currentUserId: string,
  selectedSubmitterId: string | null
) => {
  const scheduleBlockOfSelectedSubmitter = findScheduleBlockByCellAndUserId(scheduleBlocks, cell, selectedSubmitterId);
  if (scheduleBlockOfSelectedSubmitter?.userId === selectedSubmitterId) {
    return scheduleBlockOfSelectedSubmitter.color;
  }

  const scheduleBlockOfCurrentUser = findScheduleBlockByCellAndUserId(scheduleBlocks, cell, currentUserId);
  if (scheduleBlockOfCurrentUser && !selectedSubmitterId) {
    return scheduleBlockOfCurrentUser.color;
  }

  const scheduleBlock = findScheduleBlocksByCell(scheduleBlocks, cell);
  if (scheduleBlock) return 'gray';

  return null;
};

// cell: UI 에서의 칸
// scheduleBlock: cell 에 대응되는 scheduleBlock 객체. 없을 수 있음.
const Timetable = ({ scheduleBlocks, selectedSubmitterId, currentUserId, onClick }: TimetableProps) => {
  const handleCellClick = (currentCell: CellType) => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }

    onClick(currentCell, findScheduleBlockByCellAndUserId(scheduleBlocks, currentCell, currentUserId));
  };

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

            {Array.from([1, 2, 3, 4, 5, 6, 0]).map((day) => {
              const currentCell: CellType = {
                day,
                startTime,
                startMinute: 0,
                endTime: startTime,
                endMinute: 59,
              };

              const cellColor = getCellColor(scheduleBlocks, currentCell, currentUserId, selectedSubmitterId);

              return <Cell onClick={() => handleCellClick(currentCell)} color={cellColor} />;
            })}
          </>
        );
      })}
    </CellGrid>
  );
};

export default Timetable;
