import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    constructor(
        private readonly router: Router,
        @Inject(DOCUMENT) private document: Document,
        private readonly route: ActivatedRoute
    ) {
        // Scroll to the current anchor position
        this.route.fragment?.subscribe(fragment => {
            if (fragment) {
                const element = this.document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                    });
                }
            }
        });
    }

    public scrollTo(anchor: string | undefined): void {
        if (!anchor) {
            return;
        }
        this.router.navigate([], {
            fragment: anchor,
        });
    }
}
