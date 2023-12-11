import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

const themePostfix = '-mode';
export enum Theme {
  light = '',
  dark = `dark${themePostfix}`,
  black = `black${themePostfix}`,
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userThemeSubject = new BehaviorSubject<string>(Theme.dark);
  public userTheme$ = this.userThemeSubject.asObservable();

  constructor(private readonly overlayContainer: OverlayContainer) {
    this.overlayContainer
      .getContainerElement()
      .classList.add(this.userThemeSubject.getValue());
  }
  public setTheme(theme: Theme): void {
    this.userThemeSubject.next(theme);
    this.setOverlayContainerTheme(theme);
  }

  public getTheme(): string {
    return this.userThemeSubject.getValue();
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
