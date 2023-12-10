import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ForumComponent } from './forum.component';

describe('ForumComponent', () => {
  let spectator: Spectator<ForumComponent>;
  const createComponent = createComponentFactory(ForumComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
