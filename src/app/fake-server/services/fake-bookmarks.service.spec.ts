import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { FakeBookmarksService } from './fake-bookmarks.service';

describe('FakeBookmarksService', () => {
  let spectator: SpectatorService<FakeBookmarksService>;
  const createService = createServiceFactory(FakeBookmarksService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});