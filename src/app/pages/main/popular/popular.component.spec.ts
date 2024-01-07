import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { PopularComponent } from './popular.component';

describe('PopularComponent', () => {
  let spectator: Spectator<PopularComponent>;
  const createComponent = createComponentFactory(PopularComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
