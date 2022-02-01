import styled, { css } from 'styled-components';
import kakaoIcon from 'assets/images/logos/kakao-black.svg';

type SocialLoginButtonProps = {
  social: 'kakao';
  onClick?: () => void;
};

const ButtonWrapper = styled.button<Pick<SocialLoginButtonProps, 'social'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  font-size: 16px;
  font-weight: 500;

  ${(props) =>
    props.social === 'kakao' &&
    css`
      background-color: ${props.theme.colors.specific.kakaoBackground};
      color: ${props.theme.colors.specific.kakaoText};
    `};
`;

const SocialIcon = styled.img`
  position: absolute;
  left: 13px;
  top: 15px;
  height: 20px;
`;

const SocialLoginButton = ({ social, onClick }: SocialLoginButtonProps) => {
  let socialName;
  if (social === 'kakao') socialName = '카카오';

  let socialIcon;
  if (social === 'kakao') socialIcon = kakaoIcon;

  return (
    <ButtonWrapper social={social} onClick={() => onClick && onClick()}>
      <SocialIcon src={socialIcon} />
      {socialName}로 시작하기
    </ButtonWrapper>
  );
};

SocialLoginButton.defaultProps = {
  onClick: null,
};

export default SocialLoginButton;
