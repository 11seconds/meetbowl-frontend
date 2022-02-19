import { useState, useEffect, useRef } from 'react';

import Typography from 'components/common/Typography';
import TextField from 'components/common/TextField';

type TitleProps = {
  title: string;
  isEditable: boolean;
  onChange: (newTitle: string) => void;
};

const Title = ({ title, isEditable, onChange }: TitleProps) => {
  const textFieldRef = useRef<HTMLInputElement>(null);
  const [modifying, setModifying] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (textFieldRef.current && modifying) {
      textFieldRef.current.focus();
    }
  }, [modifying, changed, setChanged]);

  useEffect(() => {
    if (modifying) {
      setChanged(true);
    }
  }, [changed, modifying]);

  useEffect(() => {
    if (changed && !modifying && newTitle.length > 0) {
      onChange(newTitle);
      setChanged(false);
    }
  }, [modifying, changed, newTitle, setChanged, onChange]);

  if (isEditable && modifying) {
    return (
      <TextField
        ref={textFieldRef}
        width="100%"
        defaultValue={title}
        placeholder="시간표 제목"
        onBlur={() => setModifying(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setModifying(false);
        }}
        onChange={(e) => setNewTitle(e.target.value)}
      />
    );
  }

  return (
    <Typography size="lg" weight="bold" onClick={() => setModifying(true)}>
      {title}
    </Typography>
  );
};

export default Title;
