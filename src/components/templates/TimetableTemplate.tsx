import styled from 'styled-components';

type TimetableTemplateProps = {
  header: JSX.Element;
  timetable: JSX.Element;
  bottomSheet: JSX.Element;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  height: 65px;
`;

const Timetable = styled.div`
  flex-grow: 1;
  overflow: scroll;
`;

const BottomSheet = styled.div``;

const TimetableTemplate = ({ header, timetable, bottomSheet }: TimetableTemplateProps) => (
  <Wrapper>
    <Header>{header}</Header>
    <Timetable>{timetable}</Timetable>
    <BottomSheet>{bottomSheet}</BottomSheet>
  </Wrapper>
);
export default TimetableTemplate;
