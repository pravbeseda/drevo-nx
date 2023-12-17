import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let spectator: SpectatorService<LayoutService>;
  const createService = createServiceFactory(LayoutService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});