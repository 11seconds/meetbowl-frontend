import Button from 'components/common/Button';

export default {
  title: 'common/Button',
  component: Button,
};

export const LargeButton = () => (
  <Button color="red" size="lg">
    Large Button
  </Button>
);

export const SmallButton = () => (
  <Button color="red" size="sm">
    Small Button
  </Button>
);

export const InlineButton = () => (
  <Button color="red" size="sm" inline>
    Inline Button
  </Button>
);
