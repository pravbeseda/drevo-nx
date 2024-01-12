import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let spectator: SpectatorService<ArticleService>;
  const createService = createServiceFactory(ArticleService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});