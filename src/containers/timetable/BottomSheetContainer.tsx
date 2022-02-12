import Margin from 'components/common/Margin';
import Flex from 'components/common/Flex';
import Typography from 'components/common/Typography';
import BottomSheet from 'components/timetable/BottomSheet';
import Toggle from 'components/common/Toggle';
import NameGrid from 'components/timetable/NameGrid';
import SubmitterName from 'components/timetable/SubmitterName';

type BottomSheetContainerProps = {
  timetableId: string;
};

const BottomSheetContainer = ({ timetableId }: BottomSheetContainerProps) => {
  return (
    <BottomSheet
      header={
        <>
          <Typography size="base" weight="bold">
            9명 제출
          </Typography>
          <Flex align="center">
            <Typography size="sm" weight="medium" color="red">
              모두 선택
            </Typography>
            <Margin direction="horizontal" size={8} />
            <Toggle />
          </Flex>
        </>
      }
      body={
        <NameGrid>
          <SubmitterName color="#f03e3e" name="USER NAME" />
          <SubmitterName color="#0ca678" name="USER NAME" />
          <SubmitterName color="#d6336c" name="USER NAME" />
          <SubmitterName color="#1c7ed6" name="USER NAME" />
          <SubmitterName color="#f59f00" name="USER NAME" />
          <SubmitterName color="#ae3ec9" name="USER NAME" />
          <SubmitterName color="#4263eb" name="USER NAME" />
          <SubmitterName color="#94d82d" name="USER NAME" />
          <SubmitterName color="#7048e8" name="USER NAME" />
        </NameGrid>
      }
    />
  );
};

export default BottomSheetContainer;
