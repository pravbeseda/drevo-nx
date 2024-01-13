import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/main/main.routes').then(m => m.mainRoutes),
    },
    {
        path: 'articles',
        loadChildren: () =>
            import('./pages/article/article.routes').then(m => m.articleRoutes),
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
    {
        path: '**',
        loadComponent: () =>
            import('./pages/errors/not-found/not-found.component').then(
                m => m.NotFoundComponent
            ),
    },
];
