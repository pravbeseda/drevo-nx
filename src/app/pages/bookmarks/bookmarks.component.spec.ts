import {
    Spectator,
    createComponentFactory,
    mockProvider,
} from '@ngneat/spectator/jest';

import { BookmarksComponent } from './bookmarks.component';
import { ActivatedRoute } from '@angular/router';

describe('BookmarksComponent', () => {
    let spectator: Spectator<BookmarksComponent>;
    const createComponent = createComponentFactory(BookmarksComponent);

    it('should create', () => {
        spectator = createComponent({
            providers: [mockProvider(ActivatedRoute)],
        });

        expect(spectator.component).toBeTruthy();
    });
});
