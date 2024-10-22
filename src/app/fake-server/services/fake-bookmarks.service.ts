import { Injectable } from '@angular/core';
import { FakeArticleService } from './fake-article.service';
import { map, Observable } from 'rxjs';
import { Bookmark } from '@shared/models/bookmark';

@Injectable({
    providedIn: 'root',
})
export class FakeBookmarksService {
    private bookmarks$ = this.fakeArticleService.getArticles(15, 0).pipe(
        map(articles =>
            articles.map(article => ({
                id: article.id,
                title: article.title,
                path: `/articles/${article.id}`,
            }))
        )
    );
    constructor(private readonly fakeArticleService: FakeArticleService) {}

    public getBookmarks(): Observable<Bookmark[]> {
        return this.bookmarks$;
    }
}
