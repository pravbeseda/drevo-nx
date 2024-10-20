import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator/jest';
import { LayoutComponent } from './layout.component';
import { ActivatedRoute } from '@angular/router';
import { Theme, ThemeService } from '../../core/services/theme.service';
import { BehaviorSubject } from 'rxjs';
import { THEMES } from '@shared/consts/themes';

describe('LayoutComponent', () => {
    let spectator: Spectator<LayoutComponent>;
    let component: LayoutComponent;
    let currentTheme$: BehaviorSubject<Theme>;
    const getLayoutWrapper = () => spectator.query('#layout-wrapper');
    const createComponent = createComponentFactory({
        component: LayoutComponent,
    });

    beforeEach(() => {
        currentTheme$ = new BehaviorSubject<Theme>(Theme.light);
        spectator = createComponent({
            providers: [
                mockProvider(ActivatedRoute),
                mockProvider(ThemeService, {
                    currentTheme$,
                }),
            ],
        });
        component = spectator.component;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    THEMES.forEach(theme => {
        it(`should set theme ${theme}`, () => {
            currentTheme$.next(theme);
            spectator.detectChanges();

            expect(getLayoutWrapper()).toHaveClass(theme);
            const otherThemes = THEMES.filter(t => t !== theme);
            otherThemes.forEach(otherTheme => {
                expect(getLayoutWrapper()).not.toHaveClass(otherTheme);
            });
        });
    });
});
