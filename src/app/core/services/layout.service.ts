import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import {
    BreakpointObserver,
    BreakpointState,
    Breakpoints,
} from '@angular/cdk/layout';

export enum ScreenSize {
    Unknown = 0,
    XSmall = 10,
    Small = 20,
    Medium = 30,
    Large = 40,
    XLarge = 50,
}

const displayNameMap = new Map([
    [Breakpoints.XSmall, ScreenSize.XSmall],
    [Breakpoints.Small, ScreenSize.Small],
    [Breakpoints.Medium, ScreenSize.Medium],
    [Breakpoints.Large, ScreenSize.Large],
    [Breakpoints.XLarge, ScreenSize.XLarge],
]);

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    public readonly currentScreenSize$ = this.breakpointObserver
        .observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge,
        ])
        .pipe(map(this.screenSizeMapper));
    public readonly isMobile$ = this.currentScreenSize$.pipe(
        map(size => size < ScreenSize.Medium)
    );

    private readonly _sidebarOpened = new BehaviorSubject(false);
    public readonly sidebarOpened$ = this._sidebarOpened.asObservable();

    constructor(private readonly breakpointObserver: BreakpointObserver) {}

    public toggleSidebar(): void {
        this._sidebarOpened.next(!this._sidebarOpened.getValue());
    }

    private screenSizeMapper(breakpointState: BreakpointState): ScreenSize {
        let result = ScreenSize.Unknown;
        for (const query of Object.keys(breakpointState.breakpoints)) {
            if (breakpointState.breakpoints[query]) {
                result = displayNameMap.get(query) ?? ScreenSize.Unknown;
            }
        }
        return result;
    }
}
