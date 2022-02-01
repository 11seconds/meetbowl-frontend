import MobileScreen from 'components/common/MobileScreen';
import FullScreenButtonTemplate from 'components/templates/FullScreenButtonTemplate';
import Button from 'components/common/Button';
import TextField from 'components/common/TextField';

const CreateTimetable = () => (
  <MobileScreen>
    <FullScreenButtonTemplate
      content={<TextField align="center" placeholder="시간표 제목을 입력하세요" />}
      button={
        <Button color="red" size="lg">
          생성하기
        </Button>
      }
    />
  </MobileScreen>
);

export default CreateTimetable;
