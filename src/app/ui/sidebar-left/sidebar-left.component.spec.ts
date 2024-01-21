import {
    Spectator,
    createComponentFactory,
    mockProvider,
} from '@ngneat/spectator/jest';

import { SidebarLeftComponent } from './sidebar-left.component';
import { ActivatedRoute } from '@angular/router';

describe('SidebarLeftContentComponent', () => {
    let spectator: Spectator<SidebarLeftComponent>;
    const createComponent = createComponentFactory(SidebarLeftComponent);

    it('should create', () => {
        spectator = createComponent({
            providers: [mockProvider(ActivatedRoute)],
        });

        expect(spectator.component).toBeTruthy();
    });
});
