import styled from 'styled-components';

import Spinner from './Spinner';
import Typography from './Typography';
import Margin from './Margin';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 999;
`;

const ScreenSpinner = () => (
  <Wrapper>
    <Spinner />

    <Margin size={10} />

    <Typography size="sm" weight="medium">
      잠시만 기다려주세요
    </Typography>
  </Wrapper>
);

export default ScreenSpinner;
