import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { ThemeService } from './theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { THEMES } from '../../shared/consts/themes';

describe('ThemeService', () => {
  let spectator: SpectatorService<ThemeService>;
  let overlayContainer: OverlayContainer;

  const createService = createServiceFactory({
    service: ThemeService,
  });

  beforeEach(() => {
    spectator = createService();
    overlayContainer = spectator.inject(OverlayContainer);
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  THEMES.forEach((theme) => {
    describe(`when theme is ${theme}`, () => {
      it('should set theme', () => {
        const currentThemeSpy = jest.fn();
        spectator.service.currentTheme$.subscribe(currentThemeSpy);

        spectator.service.setTheme(theme);
        expect(currentThemeSpy).toHaveBeenCalledWith(theme);
      });

      it('should set overlay container theme', () => {
        const overlayContainerClasses = new Set(
          THEMES.filter((t) => t !== theme)
        );
        overlayContainer
          .getContainerElement()
          .classList.add(...overlayContainerClasses);

        spectator.service.setTheme(theme);

        THEMES.forEach((checkedTheme) => {
          expect(
            overlayContainer
              .getContainerElement()
              .classList.contains(checkedTheme)
          ).toBe(checkedTheme === theme);
        });
      });
    });
  });
});
