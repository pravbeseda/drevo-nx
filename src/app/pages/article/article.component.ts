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
        tap(id => this.setContent(id))
    );

    constructor(
        private readonly articleService: ArticleService,
        private readonly route: ActivatedRoute,
        private readonly sidebarRightService: SidebarRightService
    ) {}

    public setContent(article: Article): void {
        if (this.route?.snapshot.data['showContent'] || this.showContent) {
            this.sidebarRightService.setContent([
                {
                    title: 'Начало статьи',
                    anchor: '0',
                    subtitles: [
                        {
                            subtitles: [
                                { title: 'Subpart 1', anchor: '1' },
                                { title: 'Subpart 2', anchor: '2' },
                            ],
                        },
                        {
                            title: 'Part 2',
                            anchor: '3',
                        },
                        {
                            title: 'Part 3',
                            anchor: '4',
                        },
                    ],
                },
                {
                    title: 'Part 4',
                    anchor: '6',
                    subtitles: [
                        { title: 'Subpart 1', anchor: '1' },
                        { title: 'Subpart 2', anchor: '2' },
                    ],
                },
                {
                    title: 'Part 5',
                    anchor: '7',
                },
            ]);
        }
    }
}
