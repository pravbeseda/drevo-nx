import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let spectator: Spectator<ArticleComponent>;
  const createComponent = createComponentFactory(ArticleComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
