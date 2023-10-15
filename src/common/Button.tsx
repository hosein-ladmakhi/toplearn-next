import Link from 'next/link';

interface IProps {
  children: string;
  options?: string;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  linkPath?: string;
}

export default function Button({
  children,
  options = '',
  isLoading,
  onClick = () => {},
  linkPath,
}: IProps) {
  const printLoading = () => {
    return isLoading && <span className="loading loading-spinner"></span>;
  };

  const className = `cursor-pointer btn btn-neutral ${options}`;

  if (linkPath) {
    return (
      <Link className={className} href={linkPath}>
        {printLoading()}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {printLoading()}
      {children}
    </button>
  );
}
