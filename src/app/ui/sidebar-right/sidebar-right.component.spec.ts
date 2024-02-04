import {
    Spectator,
    createComponentFactory,
    mockProvider,
} from '@ngneat/spectator/jest';

import { SidebarRightComponent } from './sidebar-right.component';
import { ActivatedRoute } from '@angular/router';
import { SidebarRightService } from './services/sidebar-right.service';
import { Subject } from 'rxjs';
import { fakeAsync } from '@angular/core/testing';

describe('SidebarRightContentComponent', () => {
    let spectator: Spectator<SidebarRightComponent>;
    let content$: Subject<Content | null>;
    const createComponent = createComponentFactory(SidebarRightComponent);

    beforeEach(() => {
        content$ = new Subject<Content | null>();
        spectator = createComponent({
            providers: [
                mockProvider(ActivatedRoute),
                mockProvider(SidebarRightService, { content$ }),
            ],
        });
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });

    // Todo: fix this test
    it.skip('should set first tab active on content change', fakeAsync(() => {
        const selectedTabIndexSpy = jest.fn();
        const tabGroup = spectator.component.tabGroup!;
        expect(tabGroup.selectedIndex).toBe(0);
        expect(tabGroup._allTabs).toHaveLength(1);

        spectator.component.selectedTabIndex$.subscribe(selectedTabIndexSpy);
        expect(spectator.queryAll('.mdc-tab')).toHaveLength(1);
        content$.next({ title: 'test', anchor: 'test' });
        spectator.tick();
        expect(selectedTabIndexSpy).toHaveBeenLastCalledWith(0);

        expect(spectator.queryAll('.mdc-tab')).toHaveLength(2);

        expect(spectator.query('#content-tab')).toHaveLength(1);

        console.log(spectator.element.outerHTML);

        // expect(tabGroup.selectedIndex).toBe(0);
    }));
});
