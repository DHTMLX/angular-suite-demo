export function getData() {
  const chartData = [
    {
      id: 'Jan',
      value: 44.33,
      month: 'Jan',
      color: 'var(--dhx-color-primary-light-active)',
      opacity: 1,
    },
    {
      id: 'Feb',
      value: 22.12,
      month: 'Feb',
      color: 'var(--dhx-color-primary-active)',
      opacity: 0.4,
    },
    {
      id: 'Mar',
      value: 53.21,
      month: 'Mar',
      color: 'var(--dhx-color-primary-disabled)',
      opacity: 0.6,
    },
    {
      id: 'Apr',
      value: 34.25,
      month: 'Apr',
      color: 'var(--dhx-color-primary-light-hover)',
      opacity: 0.2,
    }
  ];

  return chartData;
}
