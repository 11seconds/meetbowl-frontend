import MobileScreen from 'components/common/MobileScreen';
import FullScreenButtonTemplate from 'components/templates/FullScreenButtonTemplate';
import Button from 'components/common/Button';
import TextField from 'components/common/TextField';

const SignUp = () => (
  <MobileScreen>
    <FullScreenButtonTemplate
      content={<TextField align="center" placeholder="이름을 입력해주세요" />}
      button={
        <Button color="red" size="lg">
          확인
        </Button>
      }
    />
  </MobileScreen>
);

export default SignUp;
