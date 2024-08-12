import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Components',
          route: '/components',
          children: [{ label: 'Address', route: '/components/form' }],
        },
        {
          icon: 'assets/icons/heroicons/outline/expand.svg',
          label: 'Full Page',
          route: '/weather',
          children: [{ label: 'Address', route: '/weather/address' }],
        },
      ],
    },
  ];
}
