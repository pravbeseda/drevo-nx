import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidebarRightService {
    private readonly contentSubject = new BehaviorSubject<Content[] | null>(
        null
    );
    public readonly content$ = this.contentSubject.asObservable();

    constructor(private readonly route: Router) {
        this.route.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(() => {
                this.contentSubject.next(null);
            });
    }

    public setContent(newContent: Content[] | null): void {
        this.contentSubject.next(newContent);
    }
}
