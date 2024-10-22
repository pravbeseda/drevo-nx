import { Injectable } from '@angular/core';
import { BookmarksApiService } from '../../../api/bookmarks-api.service';
import { Observable } from 'rxjs';
import { Bookmark } from '@shared/models/bookmark';

@Injectable()
export class BookmarksService {
    constructor(private readonly bookmarksApiService: BookmarksApiService) {}

    public getBookmarks(): Observable<Bookmark[]> {
        return this.bookmarksApiService.getBookmarks();
    }
}
