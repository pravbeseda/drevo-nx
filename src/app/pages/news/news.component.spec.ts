import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let spectator: Spectator<NewsComponent>;
  const createComponent = createComponentFactory(NewsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
