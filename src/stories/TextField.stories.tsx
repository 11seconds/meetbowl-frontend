import TextField from 'components/common/TextField';

export default {
  title: 'Text Field',
  component: TextField,
};

export const Default = () => <TextField placeholder="제목을 입력해주세요" />;

export const CenterAlign = () => <TextField placeholder="제목을 입력해주세요" align="center" />;

export const RightAlign = () => <TextField placeholder="제목을 입력해주세요" align="right" />;

export const Width = () => <TextField placeholder="제목을 입력해주세요" width={500} />;
