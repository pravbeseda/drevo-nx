import { Injectable } from '@angular/core';
import { FakeBookmarksService } from '../fake-server/services/fake-bookmarks.service';
import { Observable } from 'rxjs';
import { Bookmark } from '@shared/models/bookmark';

@Injectable({
    providedIn: 'root',
})
export class BookmarksApiService {
    constructor(private readonly fakeBookmarksService: FakeBookmarksService) {}

    public getBookmarks(): Observable<Bookmark[]> {
        return this.fakeBookmarksService.getBookmarks();
    }
}
