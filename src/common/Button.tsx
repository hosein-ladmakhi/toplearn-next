interface IProps {
  children: string;
  options?: string;
  isLoading?: boolean;
}

export default function Button({ children, options = '', isLoading }: IProps) {
  return (
    <button className={`btn btn-neutral my-5 ${options}`}>
      {isLoading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
}
