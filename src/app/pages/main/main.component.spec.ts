import {
    Spectator,
    createComponentFactory,
    mockProvider,
} from '@ngneat/spectator/jest';

import { MainComponent } from './main.component';
import { ActivatedRoute } from '@angular/router';

describe('MainComponent', () => {
    let spectator: Spectator<MainComponent>;
    const createComponent = createComponentFactory(MainComponent);

    it('should create', () => {
        spectator = createComponent({
            providers: [mockProvider(ActivatedRoute)],
        });

        expect(spectator.component).toBeTruthy();
    });
});
