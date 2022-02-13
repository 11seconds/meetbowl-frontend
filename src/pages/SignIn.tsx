import MobileScreen from 'components/common/MobileScreen';
import FullScreenButtonTemplate from 'components/templates/FullScreenButtonTemplate';
import SocialLoginButton from 'components/signIn/SocialLoginButton';

import meetbowlLogo from 'assets/images/logos/meetbowl.svg';

const SignIn = () => {
  const kakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.authorize({
      redirectUri: `${process.env.REACT_APP_KAKAO_REDIRECT_HOST}/authorization`,
    });
  };

  return (
    <MobileScreen color="red">
      <FullScreenButtonTemplate
        content={<img src={meetbowlLogo} alt="logo" />}
        button={<SocialLoginButton social="kakao" onClick={kakaoLogin} />}
      />
    </MobileScreen>
  );
};

export default SignIn;
