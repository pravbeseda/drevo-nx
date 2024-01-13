import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ArticleService } from './article.service';
import { mockProvider } from '@ngneat/spectator/jest';
import { ArticleApiService } from '../../../api/article-api.service';

describe('ArticleService', () => {
    let spectator: SpectatorService<ArticleService>;
    const createService = createServiceFactory(ArticleService);

    beforeEach(
        () =>
            (spectator = createService({
                providers: [mockProvider(ArticleApiService)],
            }))
    );

    it('should be created', () => {
        expect(spectator.service).toBeTruthy();
    });
});
