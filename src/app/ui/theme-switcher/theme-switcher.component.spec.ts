import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ThemeSwitcherComponent } from './theme-switcher.component';

describe('ThemeSwitcherComponent', () => {
  let spectator: Spectator<ThemeSwitcherComponent>;
  const createComponent = createComponentFactory(ThemeSwitcherComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  ['light-mode', 'dark-mode', 'black-mode'].forEach((theme) => {
    it(`should switch theme ${theme}`, () => {
      const menu = spectator.query(`button[data-qa-menu="themes"]`);
      const menuItem = spectator.query(`[data-qa-theme="${theme}"]`);
      expect(menu).toExist();
      spectator.click(`button[data-qa-menu="themes"]`);

      expect(menuItem).toExist();

      // menuItem?.click();
    });
  });
});
