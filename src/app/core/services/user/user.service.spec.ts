import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { UserService } from './user.service';

describe('UserService', () => {
  let spectator: SpectatorService<UserService>;
  const createService = createServiceFactory(UserService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});