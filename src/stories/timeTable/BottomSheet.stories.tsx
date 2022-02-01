import BottomSheet from 'components/timetable/BottomSheet';
import NameGrid from 'components/timetable/NameGrid';
import SubmitterName from 'components/timetable/SubmitterName';
import Typography from 'components/common/Typography';

export default {
  title: 'timetable/BottomSheet',
  component: BottomSheet,
};

export const Default = () => <BottomSheet header="This is header" body="And... This is body" />;

export const OnlyHeader = () => <BottomSheet header="I have no body" />;

export const WithNames = () => (
  <BottomSheet
    header={<Typography weight="bold">9명 제출</Typography>}
    body={
      <NameGrid>
        <SubmitterName color="#FF97D5" name="USER NAME 1" />
        <SubmitterName color="#28D0F5" name="USER NAME 2" />
        <SubmitterName color="#FA8B25" name="USER NAME 3" />
        <SubmitterName color="#A32FFF" name="USER NAME 4" />
        <SubmitterName color="#3F46F7" name="USER NAME 5" />
        <SubmitterName color="#FFCC18" name="USER NAME 6" />
        <SubmitterName color="#F23737" name="USER NAME 7" />
        <SubmitterName color="#232323" name="USER NAME 8" />
        <SubmitterName color="#1ABC2A" name="USER NAME 9" />
      </NameGrid>
    }
  />
);
