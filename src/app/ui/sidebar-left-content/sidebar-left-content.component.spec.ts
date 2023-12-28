import {
    Spectator,
    createComponentFactory,
    mockProvider,
} from '@ngneat/spectator/jest';

import { SidebarLeftContentComponent } from './sidebar-left-content.component';
import { ActivatedRoute } from '@angular/router';

describe('SidebarLeftContentComponent', () => {
    let spectator: Spectator<SidebarLeftContentComponent>;
    const createComponent = createComponentFactory(SidebarLeftContentComponent);

    it('should create', () => {
        spectator = createComponent({
            providers: [mockProvider(ActivatedRoute)],
        });

        expect(spectator.component).toBeTruthy();
    });
});
