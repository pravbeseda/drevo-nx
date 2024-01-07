import { Route } from '@angular/router';

export const mainRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('./main.component').then(m => m.MainComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./home/home.component').then(m => m.HomeComponent),
            },
            {
                path: 'calendar',
                loadComponent: () =>
                    import('./calendar/calendar.component').then(
                        m => m.CalendarComponent
                    ),
            },
            {
                path: 'popular',
                loadComponent: () =>
                    import('./popular/popular.component').then(
                        m => m.PopularComponent
                    ),
            },
            {
                path: 'new',
                loadComponent: () =>
                    import('./new/new.component').then(m => m.NewComponent),
            },
        ],
    },
];
