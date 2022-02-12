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

type HeaderProps = {
  title: JSX.Element;
  menu?: JSX.Element;
};

const Header = ({ title, menu }: HeaderProps) => (
  <Wrapper>
    <Title>{title}</Title>
    <div>{menu}</div>
  </Wrapper>
);

Header.defaultProps = {
  menu: undefined,
};

export default Header;
