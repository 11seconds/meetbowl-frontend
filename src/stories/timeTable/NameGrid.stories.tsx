import NameGrid from 'components/timeTable/NameGrid';
import SubmitterName from 'components/timeTable/SubmitterName';

export default {
  title: 'timeTable/Name Grid',
  component: NameGrid,
};

export const Default = () => (
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
);
