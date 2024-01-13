import { Route } from '@angular/router';

export const articleRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('./article.component').then(m => m.ArticleComponent),
    },
    {
        path: ':articleId',
        loadComponent: () =>
            import('./article.component').then(m => m.ArticleComponent),
    },
];
