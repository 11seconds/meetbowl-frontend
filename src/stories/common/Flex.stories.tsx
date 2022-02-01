import styled from 'styled-components';
import Flex from 'components/common/Flex';

export default {
  title: 'common/Flex',
  Component: Flex,
};

const Block = styled.div<{ height: number }>`
  width: 100px;
  height: ${(props) => props.height}px;
  border: 1px solid #000000;
`;

export const JustifyCenter = () => (
  <Flex justify="center">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);

export const JustifySpaceBetween = () => (
  <Flex justify="space-between">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);

export const JustifyFlexStart = () => (
  <Flex justify="flex-start">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);

export const JustifyFlexEnd = () => (
  <Flex justify="flex-end">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);

export const AlignCenter = () => (
  <Flex align="center">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);

export const AlignSpaceBetween = () => (
  <Flex align="space-between">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);

export const AlignFlexStart = () => (
  <Flex align="flex-start">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);

export const AlignFlexEnd = () => (
  <Flex align="flex-end">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);

export const RowDirection = () => (
  <Flex direction="row">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);

export const ColumnDirection = () => (
  <Flex direction="column">
    <Block height={20}>Block</Block>
    <Block height={30}>Block</Block>
    <Block height={40}>Block</Block>
    <Block height={50}>Block</Block>
  </Flex>
);
