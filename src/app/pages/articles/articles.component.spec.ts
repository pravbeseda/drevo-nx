import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
  let spectator: Spectator<ArticlesComponent>;
  const createComponent = createComponentFactory(ArticlesComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
