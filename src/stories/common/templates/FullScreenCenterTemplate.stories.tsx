import MobileScreen from 'components/common/MobileScreen';
import ScreenSpinner from 'components/common/ScreenSpinner';
import FullScreenCenterTemplate from 'components/common/templates/FullScreenCenterTemplate';

export default {
  title: 'common/templates/Full Screen Center Template',
  component: FullScreenCenterTemplate,
};

export const Spinner = () => (
  <MobileScreen>
    <FullScreenCenterTemplate content={<ScreenSpinner />} />
  </MobileScreen>
);
