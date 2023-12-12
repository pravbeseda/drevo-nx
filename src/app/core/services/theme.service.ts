import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

const themePostfix = '-mode';
export enum Theme {
  light = `light${themePostfix}`,
  dark = `dark${themePostfix}`,
  black = `black${themePostfix}`,
}
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private userThemeSubject = new BehaviorSubject<Theme>(Theme.light);
  public userTheme$ = this.userThemeSubject.asObservable();

  constructor(private readonly overlayContainer: OverlayContainer) {
    this.setOverlayContainerTheme(this.userThemeSubject.getValue());
  }
  public setTheme(theme: Theme): void {
    this.userThemeSubject.next(theme);
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
