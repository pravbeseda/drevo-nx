import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let spectator: SpectatorService<ThemeService>;
  const createService = createServiceFactory(ThemeService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
