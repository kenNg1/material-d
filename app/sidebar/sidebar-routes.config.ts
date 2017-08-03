import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'material-icons' },

    { path: 'pages/timeline', title: 'Timeline Page', menuType: MenuType.LEFT, icon:'material-icons' },
    { path: 'pages/user', title: 'User Page', menuType: MenuType.LEFT, icon:'material-icons' },

    { path: 'components/buttons', title: 'Buttons', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    { path: 'components/grid', title: 'Grid System', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    { path: 'components/panels', title: 'Panels', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    { path: 'components/sweet-alert', title: 'Sweet Alert', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    { path: 'components/notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    { path: 'components/icons', title: 'Icons', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },
    { path: 'components/typography', title: 'Typography', menuType: MenuType.LEFT, icon:'pe-7s-plugin' },

    { path: 'forms/regular', title: 'Regular Forms', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    { path: 'forms/extended', title: 'Extended Forms', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    { path: 'forms/validation', title: 'Validation Forms', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    { path: 'forms/wizard', title: 'Wizard', menuType: MenuType.LEFT, icon:'pe-7s-note2' },

    { path: 'tables/regular', title: 'Regular Tables', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'tables/extended', title: 'Extended Tables', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'tables/datatables.net', title: 'DataTables.net', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },

    { path: 'maps/google', title: 'Google Maps', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    { path: 'maps/fullscreen', title: 'Full Screen Map', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    { path: 'maps/vector', title: 'Vector Map', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },

    { path: 'widgets', title: 'Widgets', menuType: MenuType.LEFT, icon:'material-icons' },

    { path: 'charts', title: 'Charts', menuType: MenuType.LEFT, icon:'material-icons' },

    { path: 'calendar', title: 'Calendar', menuType: MenuType.LEFT, icon:'material-icons' },



];
