import { Injectable } from '@angular/core';
import { FakeArticleService } from '../fake-server/services/fake-article.service';
import { Observable } from 'rxjs';
import { Article } from '@shared/models/article';

@Injectable({
    providedIn: 'root',
})
export class ArticleApiService {
    constructor(private readonly fakeArticleService: FakeArticleService) {}

    public getArticle(id: number): Observable<Article> {
        return this.fakeArticleService.getArticle(id);
    }
}
