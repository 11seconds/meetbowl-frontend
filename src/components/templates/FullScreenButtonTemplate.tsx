import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;
  padding: 56px 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  flex-basis: 50px;
`;

type FullScreenButtonTemplateProps = {
  content: JSX.Element;
  button: JSX.Element;
};

const FullScreenButtonTemplate = ({ content, button }: FullScreenButtonTemplateProps) => (
  <Wrapper>
    <ContentWrapper>
      <div>{content}</div>
    </ContentWrapper>
    <ButtonWrapper>{button}</ButtonWrapper>
  </Wrapper>
);

export default FullScreenButtonTemplate;
