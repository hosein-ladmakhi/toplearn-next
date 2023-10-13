interface IProps {
  children: string;
  options?: string;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export default function Button({
  children,
  options = "",
  isLoading,
  onClick = () => {},
}: IProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer btn btn-neutral ${options}`}
    >
      {isLoading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
}
