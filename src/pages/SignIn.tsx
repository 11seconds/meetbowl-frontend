const SignIn = () => {
  const kakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.authorize({
      redirectUri: `${process.env.REACT_APP_KAKAO_REDIRECT_HOST}/authorization`,
    });
  };

  return (
    <div>
      <button type="button" onClick={kakaoLogin}>
        카카오 로그인
      </button>
    </div>
  );
};

export default SignIn;
