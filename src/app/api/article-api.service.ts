import { Injectable } from '@angular/core';
import { FakeArticleService } from '../fake-server/services/fake-article.service';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleApiService {
    constructor(private readonly fakeArticleService: FakeArticleService) {}

    getArticle(id: number): Observable<Article> {
        return this.fakeArticleService.getArticle(id);
    }
}
