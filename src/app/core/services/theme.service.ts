import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CookieService } from 'ngx-cookie-service';

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
    private currentThemeSubject = new BehaviorSubject<Theme>(Theme.dark);
    public currentTheme$ = this.currentThemeSubject.pipe(
        tap(theme => this.setTheme(theme))
    );

    constructor(
        private readonly overlayContainer: OverlayContainer,
        private readonly cookieService: CookieService
    ) {
        if (this.cookieService.check('theme')) {
            this.changeTheme(this.cookieService.get('theme') as Theme);
        }

        this.setOverlayContainerTheme(this.currentThemeSubject.getValue());

        // Todo: uncomment this after fixing the issue with the flickering on the initial load
        // this.breakpointObserver
        //     .observe(['(prefers-color-scheme: dark)'])
        //     .subscribe(result => {
        //         const isDarkMode = result.matches;
        //         const theme = isDarkMode ? Theme.dark : Theme.light;
        //         this.setTheme(theme);
        //     });
    }

    public changeTheme(theme: Theme): void {
        this.currentThemeSubject.next(theme);
    }

    private setTheme(theme: Theme): void {
        this.cookieService.set('theme', theme);
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
