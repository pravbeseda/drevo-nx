import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { loremIpsum } from 'lorem-ipsum';

@Injectable({
    providedIn: 'root',
})
export class FakeArticleService {
    public getArticle(id: number): Observable<Article> {
        if (id > 200) {
            return this.getNotFound();
        }

        return of({
            id,
            version: 1,
            title: `Article ${id}`,
            body: loremIpsum({ count: 20, units: 'paragraphs' })
                .split('\n')
                .map(paragraph => `<p>${paragraph}</p>`)
                .join(''),
        });
    }

    private getNotFound(): Observable<any> {
        const errorMessage = 'Not Found';
        return throwError(() => ({ status: 404, error: errorMessage }));
    }

    public getServerError(): Observable<any> {
        const errorMessage = 'Internal Server Error';
        return throwError(() => ({ status: 500, error: errorMessage }));
    }
}
