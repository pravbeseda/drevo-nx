import {
    Spectator,
    createComponentFactory,
    mockProvider,
} from '@ngneat/spectator/jest';

import { ArticleComponent } from './article.component';
import { ActivatedRoute } from '@angular/router';
import { NEVER } from 'rxjs';

describe('ArticleComponent', () => {
    let spectator: Spectator<ArticleComponent>;
    const createComponent = createComponentFactory(ArticleComponent);

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
