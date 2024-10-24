import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, map, Observable, switchMap, tap } from 'rxjs';
import { ArticleService } from './services/article.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { SidebarRightService } from '../../ui/sidebar-right/services/sidebar-right.service';
import { SafeHtmlPipe } from '@shared/pipes/sefe-html.pipe';
import { ScrollSpyDirective } from '@shared/directives/scroll-spy.directive';
import { Article } from '@shared/models/article';

@Component({
    selector: 'drevo-article',
    standalone: true,
    imports: [AsyncPipe, SafeHtmlPipe, NgIf, ScrollSpyDirective],
    providers: [ArticleService],
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnDestroy {
    @Input()
    public set articleId(id: number) {
        this.articleIdSubject.next(id);
    }

    @Input()
    public showTitle = true;

    @Input()
    public showContent = true;

    private readonly articleIdSubject = new BehaviorSubject<number | null>(null);

    private routeId$ = this.route.paramMap.pipe(map(params => params.get('articleId')));

    public readonly article$: Observable<Article> = combineLatest([
        this.articleIdSubject,
        this.routeId$,
    ]).pipe(
        filter(([id, routeId]) => !!id || !!routeId),
        map(([id, routeId]) => Number(routeId ?? id)),
        switchMap(id => this.articleService.getArticle(id)),
        tap(article => this.setContent(article))
    );

    constructor(
        private readonly articleService: ArticleService,
        private readonly route: ActivatedRoute,
        private readonly sidebarRightService: SidebarRightService
    ) {}

    public ngOnDestroy(): void {
        this.sidebarRightService.setContent(undefined);
    }

    public setContent(article: Article): void {
        if (this.route?.snapshot.data['showContent'] || this.showContent) {
            this.sidebarRightService.setContent(article.content);
        }
    }

    public onSectionChanged(_section: string): void {
        throw new Error('Not implemented');
    }
}
