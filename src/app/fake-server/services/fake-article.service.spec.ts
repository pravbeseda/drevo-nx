import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { FakeArticleService } from './fake-article.service';
import { error } from '@angular/compiler-cli/src/transformers/util';

describe('FakeArticleService', () => {
    let spectator: SpectatorService<FakeArticleService>;
    const createService = createServiceFactory(FakeArticleService);

    beforeEach(() => (spectator = createService()));

    it('should be created', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should get article', () => {
        const articleId = 1;
        const spy = jest.fn();
        spectator.service.getArticle(articleId).subscribe(spy);
        expect(spy).toHaveBeenLastCalledWith(
            expect.objectContaining({
                id: articleId,
                version: expect.any(Number),
                // non-empty string
                title: expect.stringMatching(/\S+/),
                body: expect.stringMatching(/\S+/),
            })
        );
    });

    it('should return NotFoundError', () => {
        const articleId = 999;
        const spy = jest.fn();
        spectator.service.getArticle(articleId).subscribe({ error: spy });

        expect(spy).toHaveBeenLastCalledWith({
            status: 404,
            error: `Not Found`,
        });
    });

    it('should return ServerError', () => {
        const spy = jest.fn();
        spectator.service.getServerError().subscribe({ error: spy });

        expect(spy).toHaveBeenLastCalledWith({
            status: 500,
            error: `Internal Server Error`,
        });
    });
});
