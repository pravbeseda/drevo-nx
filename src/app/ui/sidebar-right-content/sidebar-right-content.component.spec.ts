import {
    Spectator,
    createComponentFactory,
    mockProvider,
} from '@ngneat/spectator/jest';

import { SidebarRightContentComponent } from './sidebar-right-content.component';
import { ActivatedRoute } from '@angular/router';

describe('SidebarRightContentComponent', () => {
    let spectator: Spectator<SidebarRightContentComponent>;
    const createComponent = createComponentFactory(
        SidebarRightContentComponent
    );

    it('should create', () => {
        spectator = createComponent({
            providers: [mockProvider(ActivatedRoute)],
        });

        expect(spectator.component).toBeTruthy();
    });
});
