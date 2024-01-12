import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { FakeArticleService } from './fake-article.service';

describe('FakeArticleService', () => {
  let spectator: SpectatorService<FakeArticleService>;
  const createService = createServiceFactory(FakeArticleService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});