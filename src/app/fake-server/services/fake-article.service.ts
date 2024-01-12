import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { loremIpsum } from 'lorem-ipsum';

@Injectable()
export class FakeArticleService {
    constructor() {}

    getArticle(id: number): Observable<Article> {
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
}
