import Typography from 'components/common/Typography';

export default {
  title: 'Typography',
  component: Typography,
};

export const XLargeSize = () => <Typography size="xl">XLarge Typography</Typography>;

export const LargeSize = () => <Typography size="lg">Large Typography</Typography>;

export const BaseSize = () => <Typography size="base">Base Typography</Typography>;

export const SmallSize = () => <Typography size="sm">Small Typography</Typography>;

export const RegularWeight = () => <Typography weight="regular">Regular Typography</Typography>;

export const MediumWeight = () => <Typography weight="medium">Medium Typography</Typography>;

export const BoldWeight = () => <Typography weight="bold">Bold Typography</Typography>;
