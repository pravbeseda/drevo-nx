import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
    BehaviorSubject,
    combineLatest,
    filter,
    map,
    Observable,
    switchMap,
    tap,
} from 'rxjs';
import { ArticleService } from './services/article.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { SidebarRightService } from '../../ui/sidebar-right/services/sidebar-right.service';

@Component({
    selector: 'drevo-article',
    standalone: true,
    imports: [AsyncPipe, NgIf],
    providers: [ArticleService],
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
    @Input()
    public set articleId(id: number) {
        this.articleIdSubject.next(id);
    }

    @Input()
    public showTitle = true;

    @Input()
    public showContent = true;

    private readonly articleIdSubject = new BehaviorSubject<number | null>(
        null
    );

    private routeId$ = this.route.paramMap.pipe(
        map(params => params.get('articleId'))
    );

    public readonly article$: Observable<Article> = combineLatest([
        this.articleIdSubject,
        this.routeId$,
    ]).pipe(
        filter(([id, routeId]) => !!id || !!routeId),
        map(([id, routeId]) => Number(routeId ?? id)),
        switchMap(id => this.articleService.getArticle(id)),
        tap(this.setContent)
    );

    constructor(
        private readonly articleService: ArticleService,
        private readonly route: ActivatedRoute,
        private readonly sidebarRightService: SidebarRightService
    ) {
        const articleId = this.route.snapshot.paramMap.get('articleId');
        if (!!articleId) {
            this.articleIdSubject.next(Number(articleId));
        }
    }

    public setContent(article: Article): void {
        if (this.showContent) {
            this.sidebarRightService.setContent([
                {
                    title: article.title,
                    level: 1,
                    anchor: 'x',
                },
            ]);
        }
    }
}
