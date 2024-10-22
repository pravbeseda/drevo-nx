import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { loremIpsum } from 'lorem-ipsum';
import { Article } from '@shared/models/article';
import { Content } from '@shared/models/content';

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
        return [...Array(count)].map((_, index) => {
            const { body, content } = this.generateTextWithTitles(8);
            return {
                id: index + 1,
                version: 1,
                title: loremIpsum({
                    count: Math.floor(Math.random() * 6) + 1,
                    format: 'plain',
                    units: 'words',
                }).toUpperCase(),
                body,
                content,
            };
        });
    }

    private generateTextWithTitles(count: number): { body: string; content?: Content } {
        const headers: { id: number; title: string }[] = [];
        const body = [...Array(count)]
            .map((_, index) => {
                const title = loremIpsum({
                    count: Math.floor(Math.random() * 6) + 1,
                    format: 'plain',
                    units: 'words',
                }).replace(/^\w/, c => c.toUpperCase());

                const body = loremIpsum({
                    count: 3,
                    format: 'html',
                    units: 'paragraphs',
                });

                const id = index + 1;
                headers.push({ id, title });

                return `<h2 id="${id}">${id}. ${title}</h2>${body}`;
            })
            .join('');

        const content: Content = {
            subtitles: headers.map(({ id, title }) => ({
                title: `${id} ${title}`,
                anchor: id.toString(),
            })),
        };
        return { body, content };
    }
}
