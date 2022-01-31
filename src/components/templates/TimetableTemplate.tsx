import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;
  padding: 56px 30px;
`;

const Header = styled.div`
  display: flex;
  height: 65px;
`;

const Timetable = styled.div`
  height: calc(100% - 133px);
`;

const BottomSheet = styled.div`
  height: 68px;
`;

type TimetableTemplateProps = {
  header: JSX.Element;
  timetable: JSX.Element;
  bottomSheet: JSX.Element;
};

const FullScreenButtonTemplate = ({ header, timetable, bottomSheet }: TimetableTemplateProps) => (
  <Wrapper>
    <Header>{header}</Header>
    <Timetable>{timetable}</Timetable>
    <BottomSheet>{bottomSheet}</BottomSheet>
  </Wrapper>
);

export default FullScreenButtonTemplate;
