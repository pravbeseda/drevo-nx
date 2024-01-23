import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { BookmarksService } from './bookmarks.service';

describe('BookmarksService', () => {
  let spectator: SpectatorService<BookmarksService>;
  const createService = createServiceFactory(BookmarksService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});