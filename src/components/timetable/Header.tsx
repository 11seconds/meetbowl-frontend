import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const Title = styled.div`
  margin-right: 10px;
  flex-grow: 1;
`;

type Header = {
  title: JSX.Element;
  menu: JSX.Element;
};

const Header = ({ title, menu }: Header) => (
  <Wrapper>
    <Title>{title}</Title>
    <div>{menu}</div>
  </Wrapper>
);

export default Header;
