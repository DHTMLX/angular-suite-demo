export function getData() {
  const toolbarData = [
    {
      id: 'topMenuButton',
      type: 'button',
      value: 'Toolbar button',
      view: 'flat',
      icon: 'dxi dxi-plus',
      size: 'small',
      circle: true,
      color: 'secondary',
    },
    {
      type: 'spacer',
    },

    {
      id: 'theme',
      circle: true,
      icon: 'mdi mdi-weather-night',
      checked: false,
    },

    {
      id: 'contrast',
      twoState: true,
      active: false,
      icon: 'mdi mdi-contrast-circle',
    },
    {
      id: 'avatar',
      type: 'imageButton',
      src: 'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_63.jpg',
      count: 15,
    }
  ];

  return toolbarData;
}
