import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

const themePostfix = '-mode';
export enum Theme {
  light = `light${themePostfix}`,
  dark = `dark${themePostfix}`,
  black = `black${themePostfix}`,
  green = `green${themePostfix}`,
}
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<Theme>(Theme.light);
  public currentTheme$ = this.currentThemeSubject.asObservable();

  constructor(private readonly overlayContainer: OverlayContainer) {
    this.setOverlayContainerTheme(this.currentThemeSubject.getValue());
  }
  public setTheme(theme: Theme): void {
    this.currentThemeSubject.next(theme);
    this.setOverlayContainerTheme(theme);
  }

  private setOverlayContainerTheme(theme: Theme): void {
    const overlayContainerClasses =
      this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter(
      (item: string) => item.includes(themePostfix)
    );
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(theme);
  }
}
