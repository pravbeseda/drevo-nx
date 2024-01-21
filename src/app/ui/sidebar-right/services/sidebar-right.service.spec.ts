import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SidebarRightService } from './sidebar-right.service';
import { mockProvider } from '@ngneat/spectator/jest';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';

describe('SidebarRightService', () => {
    let spectator: SpectatorService<SidebarRightService>;
    let events: Subject<RouterEvent>;
    const createService = createServiceFactory(SidebarRightService);

    beforeEach(() => {
        events = new Subject<RouterEvent>();
        spectator = createService({
            providers: [
                mockProvider(Router, {
                    events,
                }),
            ],
        });
    });

    it('should be created', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should reset content on navigation end', () => {
        const setContentSpy = jest.fn();
        spectator.service.content$.subscribe(setContentSpy);
        spectator.service.setContent([]);
        expect(setContentSpy).toHaveBeenLastCalledWith([]);

        events.next(new NavigationEnd(0, '', ''));
        expect(setContentSpy).toHaveBeenLastCalledWith(null);
    });
});
