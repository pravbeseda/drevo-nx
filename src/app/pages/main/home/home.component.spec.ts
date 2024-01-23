import {
    Spectator,
    createComponentFactory,
    mockProvider,
} from '@ngneat/spectator/jest';

import { HomeComponent } from './home.component';
import { ActivatedRoute } from '@angular/router';
import { NEVER } from 'rxjs';

describe('HomeComponent', () => {
    let spectator: Spectator<HomeComponent>;
    const createComponent = createComponentFactory(HomeComponent);

    it('should create', () => {
        spectator = createComponent({
            providers: [
                mockProvider(ActivatedRoute, {
                    paramMap: NEVER,
                    snapshot: {
                        paramMap: {
                            get: () => '1',
                        },
                    },
                }),
            ],
        });

        expect(spectator.component).toBeTruthy();
    });
});
