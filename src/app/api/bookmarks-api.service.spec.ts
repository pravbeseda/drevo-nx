import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { BookmarksApiService } from './bookmarks-api.service';

describe('BookmarksApiService', () => {
  let spectator: SpectatorService<BookmarksApiService>;
  const createService = createServiceFactory(BookmarksApiService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});