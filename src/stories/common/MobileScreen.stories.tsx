import MobileScreen from 'components/common/MobileScreen';

export default {
  title: 'Mobile Screen',
  component: MobileScreen,
};

export const Default = () => (
  <MobileScreen>
    <h1>This is child</h1>
  </MobileScreen>
);

export const Color = () => (
  <MobileScreen color="red">
    <h1>This is child</h1>
  </MobileScreen>
);
