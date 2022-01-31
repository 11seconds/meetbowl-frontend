import MobileScreen from 'components/common/MobileScreen';
import SocialLoginButton from 'components/signIn/SocialLoginButton';
import FullScreenButtonTemplate from 'components/templates/FullScreenButtonTemplate';

import meetbowlLogo from 'assets/images/logos/meetbowl.svg';

export default {
  title: 'templates/Full Screen Button Template',
  component: FullScreenButtonTemplate,
};

export const SocialLogin = () => (
  <MobileScreen color="red">
    <FullScreenButtonTemplate
      content={<img src={meetbowlLogo} alt="logo" />}
      button={<SocialLoginButton social="kakao" />}
    />
  </MobileScreen>
);
