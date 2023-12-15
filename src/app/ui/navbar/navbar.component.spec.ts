import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator/jest';
import { NavbarComponent } from './navbar.component';
import { ActivatedRoute } from '@angular/router';
import { Theme, ThemeService } from '../../core/services/theme.service';
import { BehaviorSubject } from 'rxjs';
import { THEMES } from '../../shared/consts/themes';

describe('NavbarComponent', () => {
  let spectator: Spectator<NavbarComponent>;
  let currentTheme$: BehaviorSubject<Theme>;
  const createComponent = createComponentFactory({
    component: NavbarComponent,
    providers: [mockProvider(ActivatedRoute)],
  });
  const getNavbar = () => spectator.query('#navbar');

  beforeEach(() => {
    currentTheme$ = new BehaviorSubject<Theme>(Theme.light);
    spectator = createComponent({
      providers: [
        mockProvider(ActivatedRoute),
        mockProvider(ThemeService, { currentTheme$ }),
      ],
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  THEMES.forEach((theme) => {
    it(`should set theme ${theme}`, () => {
      currentTheme$.next(theme);
      const navbarTheme = theme === Theme.light ? Theme.green : '';
      spectator.detectChanges();
      if (navbarTheme !== '') {
        expect(getNavbar()).toHaveClass(navbarTheme);
      }
      const otherThemes = THEMES.filter((t) => t !== navbarTheme);
      otherThemes.forEach((otherTheme) => {
        expect(getNavbar()).not.toHaveClass(otherTheme);
      });
    });
  });
});
