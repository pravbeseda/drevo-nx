import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SidebarRightService } from './sidebar-right.service';

describe('SidebarRightService', () => {
    let spectator: SpectatorService<SidebarRightService>;
    const createService = createServiceFactory(SidebarRightService);

    beforeEach(() => {
        spectator = createService();
    });

    it('should be created', () => {
        expect(spectator.service).toBeTruthy();
    });

    it.each([{ id: 1, title: 'test', anchor: 'test' }, undefined])(
        'should set content',
        content => {
            const setContentSpy = jest.fn();
            spectator.service.content$.subscribe(setContentSpy);
            spectator.service.setContent(content);
            expect(setContentSpy).toHaveBeenLastCalledWith(content);
        }
    );
});
