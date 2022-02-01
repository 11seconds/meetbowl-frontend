import styled from 'styled-components';

type FlexProps = {
  justify?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
  align?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column';
};

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
`;

Flex.defaultProps = {
  justify: 'flex-start',
  align: 'flex-start',
  direction: 'row',
};

export default Flex;
