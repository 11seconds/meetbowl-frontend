import MobileScreen from 'components/common/MobileScreen';
import TimetableTemplate from 'components/templates/TimetableTemplate';

export default {
  title: 'templates/Timetable Template',
  component: TimetableTemplate,
};

export const Default = () => (
  <MobileScreen>
    <TimetableTemplate
      header={<div>Header</div>}
      timetable={<div>Timetable</div>}
      bottomSheet={<div>Bottom Sheet</div>}
    />
  </MobileScreen>
);
