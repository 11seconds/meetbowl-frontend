import styled, { css } from 'styled-components';

type SubmitterNameProps = {
  color: string;
  name: string;
  highlighted?: boolean;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

const Color = styled.div<Pick<SubmitterNameProps, 'color'>>`
  margin-right: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Name = styled.div<Pick<SubmitterNameProps, 'highlighted' | 'color'>>`
  display: inline-block;
  position: relative;
  top: 1px;
  max-width: 80px;
  font-size: 13px;
  color: ${(props) => props.theme.colors.specific.submitterNameText};
  white-space: no-wrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) =>
    props.highlighted &&
    css`
      color: ${props.color};
      font-weight: 700;
    `}
`;

const SubmitterName = ({ color, name, highlighted }: SubmitterNameProps) => (
  <Wrapper>
    <Color color={color} />
    <Name highlighted={highlighted} color={color}>
      {name}
    </Name>
  </Wrapper>
);

SubmitterName.defaultProps = {
  highlighted: false,
};

export default SubmitterName;
