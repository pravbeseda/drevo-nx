import { ActivatedRouteSnapshot, CanActivateFn, Route } from '@angular/router';

const IdIsNumber: CanActivateFn = (next: ActivatedRouteSnapshot): boolean =>
    !isNaN(Number(next.paramMap.get('articleId')));

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
        canActivate: [IdIsNumber],
        loadComponent: () =>
            import('./article.component').then(m => m.ArticleComponent),
    },
];
