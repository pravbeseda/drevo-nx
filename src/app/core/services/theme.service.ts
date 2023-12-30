import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';

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
    public currentTheme$ = this.currentThemeSubject
        .asObservable()
        .pipe(tap(theme => this.setOverlayContainerTheme(theme)));

    constructor(
        private readonly overlayContainer: OverlayContainer,
        private readonly breakpointObserver: BreakpointObserver
    ) {
        this.setOverlayContainerTheme(this.currentThemeSubject.getValue());
        this.breakpointObserver
            .observe(['(prefers-color-scheme: dark)'])
            .subscribe(result => {
                const isDarkMode = result.matches;
                const theme = isDarkMode ? Theme.dark : Theme.light;
                this.setTheme(theme);
            });
    }

    public setTheme(theme: Theme): void {
        this.currentThemeSubject.next(theme);
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
