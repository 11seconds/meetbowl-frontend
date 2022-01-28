import Button from 'components/common/Button';

export default {
  title: 'Button',
  component: Button,
};

export const LargeButton = () => (
  <Button color="red" size="large">
    Large Button
  </Button>
);

export const SmallButton = () => (
  <Button color="red" size="small">
    Small Button
  </Button>
);

export const InlineButton = () => (
  <Button color="red" size="small" inline>
    Inline Button
  </Button>
);
