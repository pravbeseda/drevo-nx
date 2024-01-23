import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { loremIpsum } from 'lorem-ipsum';

@Injectable({
    providedIn: 'root',
})
export class FakeArticleService {
    private articles: Article[] = this.generateArticles(200);

    public getArticle(id: number): Observable<Article> {
        if (!this.articles[id - 1]) {
            return this.getNotFound();
        }

        return of(this.articles[id - 1]);
    }

    public getArticles(limit: number, offset: number): Observable<Article[]> {
        const articles = this.articles.slice(offset, offset + limit);
        return of(articles);
    }

    private getNotFound(): Observable<any> {
        const errorMessage = 'Not Found';
        return throwError(() => ({ status: 404, error: errorMessage }));
    }

    public getServerError(): Observable<any> {
        const errorMessage = 'Internal Server Error';
        return throwError(() => ({ status: 500, error: errorMessage }));
    }

    private generateArticles(count: number): Article[] {
        return [...Array(count)].map((_, id) => ({
            id: id + 1,
            version: 1,
            title: loremIpsum({
                count: Math.floor(Math.random() * 6) + 1,
                format: 'plain',
                units: 'words',
            }).toUpperCase(),
            body: loremIpsum({
                count: 20,
                format: 'html',
                units: 'paragraphs',
            }),
        }));
    }
}
