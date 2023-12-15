import {
  Spectator,
  createComponentFactory,
  mockProvider,
  SpyObject,
} from '@ngneat/spectator/jest';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Theme, ThemeService } from '../../core/services/theme.service';
import { assertIsDefined } from '../../shared/routines/utils';

describe('ThemeSwitcherComponent', () => {
  let spectator: Spectator<ThemeSwitcherComponent>;
  let component: ThemeSwitcherComponent;
  let themeService: SpyObject<ThemeService>;

  const getThemeMenuButton = () => spectator.query(`#theme-menu-button`);
  const getThemeMenu = () => spectator.query(`mat-menu`);
  const chooseTheme = (theme: Theme) =>
    spectator.click(`[data-qa-theme="${theme}"]`);

  const createComponent = createComponentFactory({
    component: ThemeSwitcherComponent,
    providers: [mockProvider(ThemeService)],
    imports: [MatMenuModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    themeService = spectator.inject(ThemeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  [Theme.light, Theme.dark, Theme.black].forEach((theme) => {
    it(`should switch theme ${theme}`, () => {
      const menuTrigger = spectator.query(MatMenuTrigger);
      assertIsDefined(menuTrigger, 'MatMenuTrigger');
      expect(menuTrigger.menuOpen).toBe(false);

      spectator.click(getThemeMenuButton()!);
      expect(menuTrigger.menuOpen).toBe(true);
      expect(getThemeMenu()).toBeTruthy();

      const themeServiceSpy = jest.spyOn(themeService, 'setTheme');
      chooseTheme(theme);
      expect(themeServiceSpy).toHaveBeenCalledWith(theme);
    });
  });
});
