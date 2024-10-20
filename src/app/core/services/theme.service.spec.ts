import { createServiceFactory, mockProvider, SpectatorService } from '@ngneat/spectator/jest';
import { ThemeService } from './theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { THEMES } from '@shared/consts/themes';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

describe('ThemeService', () => {
    let spectator: SpectatorService<ThemeService>;
    let overlayContainer: OverlayContainer;
    let breakpointStateSubject: BehaviorSubject<BreakpointState>;

    const createService = createServiceFactory({
        service: ThemeService,
    });

    beforeEach(() => {
        breakpointStateSubject = new BehaviorSubject<BreakpointState>({
            matches: false,
            breakpoints: {},
        });
        spectator = createService({
            providers: [
                mockProvider(BreakpointObserver, {
                    observe: jest.fn().mockReturnValue(breakpointStateSubject),
                }),
            ],
        });
        overlayContainer = spectator.inject(OverlayContainer);
    });

    it('should be created', () => {
        expect(spectator.service).toBeTruthy();
    });

    // it('should set theme by prefers-color-scheme', () => {
    //     const setThemeSpy = jest.spyOn(spectator.service, 'changeTheme');
    //     breakpointStateSubject.next({
    //         matches: true,
    //         breakpoints: { '(prefers-color-scheme: dark)': true },
    //     });
    //     expect(setThemeSpy).toHaveBeenCalledWith(Theme.dark);
    // });

    THEMES.forEach(theme => {
        describe(`when theme is ${theme}`, () => {
            it('should set theme', () => {
                const overlayContainerClasses = new Set(THEMES.filter(t => t !== theme));
                overlayContainer.getContainerElement().classList.add(...overlayContainerClasses);

                const currentThemeSpy = jest.fn();
                spectator.service.currentTheme$.subscribe(currentThemeSpy);

                spectator.service.changeTheme(theme);
                expect(currentThemeSpy).toHaveBeenCalledWith(theme);

                THEMES.forEach(checkedTheme => {
                    expect(
                        overlayContainer.getContainerElement().classList.contains(checkedTheme)
                    ).toBe(checkedTheme === theme);
                });
            });
        });
    });
});
