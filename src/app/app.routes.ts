import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/main/main.routes').then(m => m.mainRoutes),
    },
    {
        path: 'articles',
        loadComponent: () =>
            import('./pages/articles/articles.component').then(
                m => m.ArticlesComponent
            ),
    },
    {
        path: 'news',
        loadComponent: () =>
            import('./pages/news/news.component').then(m => m.NewsComponent),
    },
    {
        path: 'forum',
        loadComponent: () =>
            import('./pages/forum/forum.component').then(m => m.ForumComponent),
    },
];
