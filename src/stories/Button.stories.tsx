import styled from 'styled-components';

const Button = styled.button<{ color?: string }>`
  background-color: ${(props) => props.color};
`;

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button>Default</Button>;
export const Red = () => <Button color="red">Red</Button>;
export const Green = () => <Button color="green">Green</Button>;
export const Blue = () => <Button color="blue">Blue</Button>;
