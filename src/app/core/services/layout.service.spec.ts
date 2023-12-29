import {
    createServiceFactory,
    mockProvider,
    SpectatorService,
} from '@ngneat/spectator/jest';
import { LayoutService, ScreenSize } from './layout.service';
import {
    BreakpointObserver,
    Breakpoints,
    BreakpointState,
} from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

describe('LayoutService', () => {
    let spectator: SpectatorService<LayoutService>;
    let breakpointStateSubject: BehaviorSubject<BreakpointState>;
    const createService = createServiceFactory({
        service: LayoutService,
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
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should have isMobile$ observable', () => {
        const isMobileSpy = jest.fn();
        spectator.service.isMobile$.subscribe(isMobileSpy);

        setScreen(Breakpoints.Small);
        expect(isMobileSpy).toHaveBeenLastCalledWith(true);

        setScreen(Breakpoints.Large);
        expect(isMobileSpy).toHaveBeenLastCalledWith(false);
    });

    it('should have currentScreenSize$ observable', () => {
        const spy = jest.fn();
        spectator.service.currentScreenSize$.subscribe(spy);

        setScreen(Breakpoints.XSmall);
        expect(spy).toHaveBeenLastCalledWith(ScreenSize.XSmall);

        setScreen(Breakpoints.Small);
        expect(spy).toHaveBeenLastCalledWith(ScreenSize.Small);

        setScreen(Breakpoints.Medium);
        expect(spy).toHaveBeenLastCalledWith(ScreenSize.Medium);

        setScreen(Breakpoints.Large);
        expect(spy).toHaveBeenLastCalledWith(ScreenSize.Large);

        setScreen(Breakpoints.XLarge);
        expect(spy).toHaveBeenLastCalledWith(ScreenSize.XLarge);

        setScreen(Breakpoints.Tablet);
        expect(spy).toHaveBeenLastCalledWith(ScreenSize.Unknown);
    });

    function setScreen(breakpoint: string) {
        breakpointStateSubject.next({
            matches: true,
            breakpoints: { [breakpoint]: true },
        } as BreakpointState);
    }
});
