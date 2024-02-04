import { Route } from '@angular/router';

export const articleRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('./article.component').then(m => m.ArticleComponent),
    },
    {
        path: ':articleId',
        data: {
            showContent: true,
        },
        loadComponent: () =>
            import('./article.component').then(m => m.ArticleComponent),
    },
];
