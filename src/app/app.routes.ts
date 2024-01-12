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
            import('./pages/article/article.component').then(
                m => m.ArticleComponent
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
