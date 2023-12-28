import {
    Spectator,
    createComponentFactory,
    mockProvider,
} from '@ngneat/spectator/jest';

import { NavbarMenuContentComponent } from './navbar-menu-content.component';
import { ActivatedRoute } from '@angular/router';

describe('NavbarMenuContentComponent', () => {
    let spectator: Spectator<NavbarMenuContentComponent>;
    const createComponent = createComponentFactory(NavbarMenuContentComponent);

    it('should create', () => {
        spectator = createComponent({
            providers: [mockProvider(ActivatedRoute)],
        });

        expect(spectator.component).toBeTruthy();
    });
});
