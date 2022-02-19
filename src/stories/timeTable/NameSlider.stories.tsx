import NameSlider from 'components/timetable/NameSlider';
import NameGrid from 'components/timetable/NameGrid';
import SubmitterName from 'components/timetable/SubmitterName';

export default {
  title: 'timetable/Name Slider',
  component: NameSlider,
};

export const Default = () => (
  <NameSlider>
    <NameGrid>
      <SubmitterName color="#FF97D5" name="NAME 1" />
      <SubmitterName color="#28D0F5" name="NAME 2" />
      <SubmitterName color="#FA8B25" name="NAME 3" />
      <SubmitterName color="#A32FFF" name="NAME 4" />
      <SubmitterName color="#3F46F7" name="NAME 5" />
      <SubmitterName color="#FFCC18" name="NAME 6" />
      <SubmitterName color="#F23737" name="NAME 7" />
      <SubmitterName color="#232323" name="NAME 8" />
      <SubmitterName color="#1ABC2A" name="NAME 9" />
    </NameGrid>
    <NameGrid>
      <SubmitterName color="#FF97D5" name="NAME 10" />
      <SubmitterName color="#28D0F5" name="NAME 11" />
      <SubmitterName color="#FA8B25" name="NAME 12" />
      <SubmitterName color="#A32FFF" name="NAME 13" />
      <SubmitterName color="#3F46F7" name="NAME 14" />
      <SubmitterName color="#FFCC18" name="NAME 15" />
      <SubmitterName color="#F23737" name="NAME 16" />w
      <SubmitterName color="#232323" name="NAME 17" />
      <SubmitterName color="#1ABC2A" name="NAME 18" />
    </NameGrid>
  </NameSlider>
);
