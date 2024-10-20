import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { NavigationService } from './navigation.service';
import { mockProvider } from '@ngneat/spectator/jest';
import { ActivatedRoute } from '@angular/router';

describe('NavigationService', () => {
    let spectator: SpectatorService<NavigationService>;
    const createService = createServiceFactory(NavigationService);

    beforeEach(
        () =>
            (spectator = createService({
                providers: [mockProvider(ActivatedRoute)],
            }))
    );

    it('should be created', () => {
        expect(spectator.service).toBeTruthy();
    });
});
