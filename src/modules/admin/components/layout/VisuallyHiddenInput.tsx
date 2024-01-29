import { styled } from '@mui/material/styles';
import { ChangeEvent, FC } from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface InputFileUploadProps {
  handleOnChange: (file: File) => void;
}

const InputFileUpload: FC<InputFileUploadProps> = ({ handleOnChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleOnChange(file);
    }
  };

  return (
    <VisuallyHiddenInput
      type="file"
      onChange={handleChange}
    />
  );
};

export default InputFileUpload;
