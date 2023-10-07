import { ChangeEvent } from 'react';

interface IProps {
  extraClasses?: string;
  file?: File;
  onChangeFile: (file: File) => void;
}

export default function ImagePicker({
  extraClasses = '',
  file,
  onChangeFile,
}: IProps) {
  const onChangeImagePicker = (event: ChangeEvent<HTMLInputElement>) =>
    onChangeFile(event.target.files!?.[0]);

  const imagePickerStyle = file
    ? {
        backgroundImage: `url(${URL.createObjectURL(file)})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }
    : {};
  return (
    <div
      className={`h-28 w-28 bg-gray-600 rounded-full mx-auto my-3 relative ${extraClasses}`}
      style={imagePickerStyle}
    >
      <input
        type="file"
        className="absolute top-0 left-0 h-full w-full opacity-0"
        onChange={onChangeImagePicker}
      />
    </div>
  );
}
