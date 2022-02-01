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
`;

type FullScreenCenterTemplateProps = {
  content: JSX.Element;
};

const FullScreenButtonTemplate = ({ content }: FullScreenCenterTemplateProps) => (
  <Wrapper>
    <ContentWrapper>{content}</ContentWrapper>
  </Wrapper>
);

export default FullScreenButtonTemplate;
