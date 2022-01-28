import Typography from 'components/common/Typography';

export default {
  title: 'Typography',
  component: Typography,
};

export const XLargeTypography = () => <Typography size="xl">XLarge Typography</Typography>;

export const LargeTypography = () => <Typography size="lg">Large Typography</Typography>;

export const BaseTypography = () => <Typography size="base">Base Typography</Typography>;

export const SmallTypography = () => <Typography size="sm">Small Typography</Typography>;

export const Weight300Typography = () => <Typography weight={300}>Thin Typography</Typography>;

export const Weight500Typography = () => <Typography weight={500}>Bold Typography</Typography>;
