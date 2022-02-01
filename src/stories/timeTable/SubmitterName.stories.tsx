import SubmitterName from 'components/timetable/SubmitterName';

export default {
  title: 'timetable/Submitter Name',
  component: SubmitterName,
};

export const Default = () => <SubmitterName color="#A32FFF" name="USER NAME" />;
export const LongName = () => <SubmitterName color="#FA8B25" name="I HAVE A LOOONG NAME" />;
export const Highlighted = () => <SubmitterName color="#1ABC2A" name="HIGHLIGHTED" highlighted />;
