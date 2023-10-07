interface IProps {
  children: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  moreClassNames?: string;
}

export default function Typography({
  children,
  variant,
  moreClassNames = '',
}: IProps) {
  const defaultHeadingClassName = `font-bold ${moreClassNames}`;

  switch (variant) {
    case 'h1':
      return (
        <h1 className={`text-xl ${defaultHeadingClassName}`}>{children}</h1>
      );
    case 'h2':
      return (
        <h2 className={`text-lg ${defaultHeadingClassName}`}>{children}</h2>
      );
    case 'h3':
      return (
        <h3 className={`text-md ${defaultHeadingClassName}`}>{children}</h3>
      );
    case 'h4':
      return (
        <h4 className={`text-sm ${defaultHeadingClassName}`}>{children}</h4>
      );
    default:
      return <></>;
  }
}
