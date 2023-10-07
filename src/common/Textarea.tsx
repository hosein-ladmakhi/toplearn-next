interface IProps {
  label: string;
  rows: number;
  placeholder: string;
}

export default function Textarea({ label, placeholder, rows }: IProps) {
  return (
    <div className="form-control">
      <label className="label">{label}</label>
      <textarea
        className="textarea textarea-ghost input-bordered w-full"
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
}
