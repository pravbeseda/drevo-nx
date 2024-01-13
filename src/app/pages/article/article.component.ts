import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, filter, Observable, switchMap } from 'rxjs';
import { ArticleService } from './services/article.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { ArticleApiService } from '../../api/article-api.service';

@Component({
    selector: 'drevo-article',
    standalone: true,
    imports: [AsyncPipe, NgIf],
    providers: [ArticleService, ArticleApiService],
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

    private readonly articleIdSubject = new BehaviorSubject<number | null>(
        null
    );
    public readonly article$: Observable<Article> = this.articleIdSubject.pipe(
        filter((id): id is number => !!id),
        switchMap(id => this.articleService.getArticle(id))
    );

    constructor(
        private readonly articleService: ArticleService,
        private readonly route: ActivatedRoute
    ) {
        const articleId = this.route.snapshot.paramMap.get('articleId');
        if (!!articleId) {
            this.articleIdSubject.next(Number(articleId));
        }
    }
}
