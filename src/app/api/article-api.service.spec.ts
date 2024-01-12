import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ArticleApiService } from './article-api.service';

describe('ArticleApiService', () => {
  let spectator: SpectatorService<ArticleApiService>;
  const createService = createServiceFactory(ArticleApiService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});