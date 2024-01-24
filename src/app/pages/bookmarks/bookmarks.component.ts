import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookmarksService } from './services/bookmarks.service';
import { AsyncPipe } from '@angular/common';
import { MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'drevo-bookmarks',
    standalone: true,
    imports: [AsyncPipe, MatListItem, RouterLink],
    providers: [BookmarksService],
    templateUrl: './bookmarks.component.html',
    styleUrl: './bookmarks.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarksComponent {
    public readonly bookmarks$ = this.bookmarksService.getBookmarks();
    constructor(private readonly bookmarksService: BookmarksService) {}
}
