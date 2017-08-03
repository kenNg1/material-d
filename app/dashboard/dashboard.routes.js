"use strict";
// import { DashboardComponent } from './dashboard.component';
var home_component_1 = require('./home/home.component');
var buttons_component_1 = require('./components/buttons/buttons.component');
var grid_component_1 = require('./components/grid/grid.component');
var icons_component_1 = require('./components/icons/icons.component');
var notifications_component_1 = require('./components/notifications/notifications.component');
var panels_component_1 = require('./components/panels/panels.component');
var sweetalert_component_1 = require('./components/sweetalert/sweetalert.component');
var typography_component_1 = require('./components/typography/typography.component');
var regulartable_component_1 = require('./tables/regulartable/regulartable.component');
var extendedtable_component_1 = require('./tables/extendedtable/extendedtable.component');
var datatable_component_1 = require('./tables/datatable.net/datatable.component');
var extendedforms_component_1 = require('./forms/extendedforms/extendedforms.component');
var regularforms_component_1 = require('./forms/regularforms/regularforms.component');
var validationforms_component_1 = require('./forms/validationforms/validationforms.component');
var wizard_component_1 = require('./forms/wizard/wizard.component');
var fullscreenmap_component_1 = require('./maps/fullscreenmap/fullscreenmap.component');
var googlemaps_component_1 = require('./maps/googlemaps/googlemaps.component');
var vectormaps_component_1 = require('./maps/vectormaps/vectormaps.component');
var charts_component_1 = require('./charts/charts.component');
var widgets_component_1 = require('./widgets/widgets.component');
var calendar_component_1 = require('./calendar/calendar.component');
var user_component_1 = require('./pages/user/user.component');
var timeline_component_1 = require('./pages/timeline/timeline.component');
//
exports.MODULE_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'components/buttons', component: buttons_component_1.ButtonsComponent },
    { path: 'components/grid', component: grid_component_1.GridSystemComponent },
    { path: 'components/icons', component: icons_component_1.IconsComponent },
    { path: 'components/notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'components/panels', component: panels_component_1.PanelsComponent },
    { path: 'components/sweet-alert', component: sweetalert_component_1.SweetAlertComponent },
    { path: 'components/typography', component: typography_component_1.TypographyComponent },
    { path: 'forms/regular', component: regularforms_component_1.RegularFormsComponent },
    { path: 'forms/extended', component: extendedforms_component_1.ExtendedFormsComponent },
    { path: 'forms/validation', component: validationforms_component_1.ValidationFormsComponent },
    { path: 'forms/wizard', component: wizard_component_1.WizardComponent },
    { path: 'tables/regular', component: regulartable_component_1.RegularTableComponent },
    { path: 'tables/extended', component: extendedtable_component_1.ExtendedTableComponent },
    { path: 'tables/datatables.net', component: datatable_component_1.DataTableComponent },
    { path: 'maps/google', component: googlemaps_component_1.GoogleMapsComponent },
    { path: 'maps/vector', component: vectormaps_component_1.VectorMapsComponent },
    { path: 'maps/fullscreen', component: fullscreenmap_component_1.FullScreenMapsComponent },
    { path: 'charts', component: charts_component_1.ChartsComponent },
    { path: 'widgets', component: widgets_component_1.WidgetsComponent },
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
    { path: 'pages/user', component: user_component_1.UserComponent },
    { path: 'pages/timeline', component: timeline_component_1.TimelineComponent },
];
//
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    buttons_component_1.ButtonsComponent,
    grid_component_1.GridSystemComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    panels_component_1.PanelsComponent,
    sweetalert_component_1.SweetAlertComponent,
    typography_component_1.TypographyComponent,
    extendedforms_component_1.ExtendedFormsComponent,
    regularforms_component_1.RegularFormsComponent,
    validationforms_component_1.ValidationFormsComponent,
    wizard_component_1.WizardComponent,
    regulartable_component_1.RegularTableComponent,
    extendedtable_component_1.ExtendedTableComponent,
    datatable_component_1.DataTableComponent,
    googlemaps_component_1.GoogleMapsComponent,
    vectormaps_component_1.VectorMapsComponent,
    fullscreenmap_component_1.FullScreenMapsComponent,
    charts_component_1.ChartsComponent,
    calendar_component_1.CalendarComponent,
    widgets_component_1.WidgetsComponent,
    user_component_1.UserComponent,
    timeline_component_1.TimelineComponent
];
//# sourceMappingURL=dashboard.routes.js.map