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
        const headers: { id: number; title: string; anchor: string }[] = [];
        const subHeaders: Record<number, number[]> = {
            1: [2, 3],
            4: [5, 6],
        };
        const subtitlesPlain = Object.values(subHeaders).flat();

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
                headers.push({ id, title: `${id} ${title}`, anchor: id.toString() });
                const tag = subtitlesPlain.includes(id) ? 'h3' : 'h2';
                return `<${tag} id="${id}">${id}. ${title}</${tag}>${body}`;
            })
            .join('');

        const mainHeaders = headers.filter(({ id }) => !subtitlesPlain.includes(id));

        const content: Content = {
            subtitles: mainHeaders.map(({ id, title, anchor }) => ({
                title,
                anchor,
                subtitles: subHeaders[id]
                    ? subHeaders[id].map(subId => headers.find(header => header.id === subId)!)
                    : [],
            })),
        };
        return { body, content };
    }
}
