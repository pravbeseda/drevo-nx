import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SidebarRightService } from './sidebar-right.service';
import { mockProvider } from '@ngneat/spectator/jest';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
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

    it('should reset content on navigation start', () => {
        const setContentSpy = jest.fn();
        spectator.service.content$.subscribe(setContentSpy);
        const content = [{ id: 1, title: 'test', anchor: 'test' }];
        spectator.service.setContent(content);
        expect(setContentSpy).toHaveBeenLastCalledWith(content);

        events.next(new NavigationStart(0, ''));
        expect(setContentSpy).toHaveBeenLastCalledWith(null);
    });
});
