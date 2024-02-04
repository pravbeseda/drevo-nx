import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ArticleContentComponent } from './article-content.component';

describe('ArticleContentComponent', () => {
  let spectator: Spectator<ArticleContentComponent>;
  const createComponent = createComponentFactory(ArticleContentComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
