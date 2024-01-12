import { Injectable } from '@angular/core';
import { ArticleApiService } from '../../../api/article-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {
    constructor(private readonly articleApiService: ArticleApiService) {}

    getArticle(id: number): Observable<Article> {
        return this.articleApiService.getArticle(id);
    }
}
