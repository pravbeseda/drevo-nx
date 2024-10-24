import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs';
import { LayoutService } from './layout.service';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    constructor(
        private readonly router: Router,
        @Inject(DOCUMENT) private document: Document,
        private readonly route: ActivatedRoute,
        private readonly layoutService: LayoutService
    ) {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
            const currentFragment = this.route.snapshot.fragment;
            if (!currentFragment) {
                // reset scroll position if there's no fragment
                this.layoutService.resetScroll();
            } else {
                // scroll to the appropriate element
                const element = this.document.getElementById(currentFragment);
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
