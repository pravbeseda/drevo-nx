import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { NewComponent } from './new.component';

describe('NewComponent', () => {
  let spectator: Spectator<NewComponent>;
  const createComponent = createComponentFactory(NewComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
