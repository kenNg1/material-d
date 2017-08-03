import { Route, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { GridSystemComponent } from './components/grid/grid.component';
import { IconsComponent } from './components/icons/icons.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PanelsComponent } from './components/panels/panels.component';
import { SweetAlertComponent } from './components/sweetalert/sweetalert.component';
import { TypographyComponent } from './components/typography/typography.component';

import { RegularTableComponent } from './tables/regulartable/regulartable.component';
import { ExtendedTableComponent } from './tables/extendedtable/extendedtable.component';
import { DataTableComponent } from './tables/datatable.net/datatable.component';

import { ExtendedFormsComponent } from './forms/extendedforms/extendedforms.component';
import { RegularFormsComponent } from './forms/regularforms/regularforms.component';
import { ValidationFormsComponent } from './forms/validationforms/validationforms.component';
import { WizardComponent } from './forms/wizard/wizard.component';

import { FullScreenMapsComponent } from './maps/fullscreenmap/fullscreenmap.component';
import { GoogleMapsComponent } from './maps/googlemaps/googlemaps.component';
import { VectorMapsComponent } from './maps/vectormaps/vectormaps.component';

import { ChartsComponent } from './charts/charts.component';

import { WidgetsComponent } from './widgets/widgets.component';

import { CalendarComponent } from './calendar/calendar.component';

import { UserComponent } from './pages/user/user.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

//
export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },

    { path: 'components/buttons', component: ButtonsComponent},
    { path: 'components/grid', component: GridSystemComponent},
    { path: 'components/icons', component: IconsComponent},
    { path: 'components/notifications', component: NotificationsComponent},
    { path: 'components/panels', component: PanelsComponent},
    { path: 'components/sweet-alert', component: SweetAlertComponent},
    { path: 'components/typography', component: TypographyComponent},

    { path: 'forms/regular', component: RegularFormsComponent},
    { path: 'forms/extended', component: ExtendedFormsComponent},
    { path: 'forms/validation', component: ValidationFormsComponent},
    { path: 'forms/wizard', component: WizardComponent},

    { path: 'tables/regular', component: RegularTableComponent },
    { path: 'tables/extended', component: ExtendedTableComponent },
    { path: 'tables/datatables.net', component: DataTableComponent },

    { path: 'maps/google', component: GoogleMapsComponent },
    { path: 'maps/vector', component: VectorMapsComponent },
    { path: 'maps/fullscreen', component: FullScreenMapsComponent },

    { path: 'charts', component: ChartsComponent },
    { path: 'widgets', component: WidgetsComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'pages/user', component: UserComponent },
    { path: 'pages/timeline', component: TimelineComponent },

]
//
export const MODULE_COMPONENTS = [
    HomeComponent,

    ButtonsComponent,
    GridSystemComponent,
    IconsComponent,
    NotificationsComponent,
    PanelsComponent,
    SweetAlertComponent,
    TypographyComponent,

    ExtendedFormsComponent,
    RegularFormsComponent,
    ValidationFormsComponent,
    WizardComponent,

    RegularTableComponent,
    ExtendedTableComponent,
    DataTableComponent,

    GoogleMapsComponent,
    VectorMapsComponent,
    FullScreenMapsComponent,

    ChartsComponent,
    CalendarComponent,
    WidgetsComponent,

    UserComponent,
    TimelineComponent
]
