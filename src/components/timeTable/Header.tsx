import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

type Header = {
  title: JSX.Element;
  menu: JSX.Element;
};

const Header = ({ title, menu }: Header) => (
  <Wrapper>
    <div>{title}</div>
    <div>{menu}</div>
  </Wrapper>
);

export default Header;
