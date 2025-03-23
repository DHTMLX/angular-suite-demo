export function getData() {
  const hotelsData = [
    { month: 'Jan.', 'Won deals': 35, 'Lost deals': 14, 'All deals': 40 },
    { month: 'Feb.', 'Won deals': 80, 'Lost deals': 59, 'All deals': 94 },
    { month: 'Mar.', 'Won deals': 35, 'Lost deals': 62, 'All deals': 48 },
    { month: 'Apr.', 'Won deals': 45, 'Lost deals': 13, 'All deals': 59 },
    { month: 'May.', 'Won deals': 45, 'Lost deals': 22, 'All deals': 59 },
    { month: 'Jun.', 'Won deals': 74, 'Lost deals': 52, 'All deals': 90 },
    { month: 'Jul.', 'Won deals': 85, 'Lost deals': 78, 'All deals': 98 },
  ];

  const seriesData: any = [
    {
      id: 'A',
      value: 'Won deals',
      color: 'none',
      fill: 'var(--dhx-color-primary)',
      showText: true,
      showTextTemplate: (sum: any) => `$${sum}`
    },
    {
      id: 'B',
      value: 'Lost deals',
      color: 'none',
      fill: 'var(--dhx-color-primary-light-active)',
      showText: true,
      showTextTemplate: (sum: any) => `$${sum}`
    },
    {
      id: 'all',
      value: 'All deals',
      color: 'none',
      fill: 'var(--dhx-color-primary-disabled)',
      type: 'area',
      strokeWidth: 0
    }
  ];

  return { seriesData, hotelsData };
}
