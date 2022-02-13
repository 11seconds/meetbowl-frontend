import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 50px;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  height: 135px;
  border-top: 1px solid ${(props) => props.theme.colors.specific.timetableLine};
`;

type BottomSheetProps = {
  header: JSX.Element | string;
  body?: JSX.Element | string;
};

const BottomSheet = ({ header, body }: BottomSheetProps) => (
  <Wrapper>
    <Header>{header}</Header>
    {body && <Body>{body}</Body>}
  </Wrapper>
);

BottomSheet.defaultProps = {
  body: null,
};

export default BottomSheet;
