import { Injectable } from '@angular/core';
import { ArticleApiService } from '../../../api/article-api.service';
import { Observable } from 'rxjs';
import { Article } from '@shared/models/article';

@Injectable()
export class ArticleService {
    constructor(private readonly articleApiService: ArticleApiService) {}

    public getArticle(id: number): Observable<Article> {
        return this.articleApiService.getArticle(id);
    }
}
