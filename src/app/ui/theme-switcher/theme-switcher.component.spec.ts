import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ThemeSwitcherComponent } from './theme-switcher.component';

describe('ThemeSwitcherComponent', () => {
  let spectator: Spectator<ThemeSwitcherComponent>;
  const createComponent = createComponentFactory(ThemeSwitcherComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
