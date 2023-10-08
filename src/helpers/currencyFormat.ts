export const currencyFormat = (value: number) =>
  `${Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'USD',
  }).format(value)}`;
