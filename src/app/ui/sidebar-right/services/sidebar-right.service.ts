import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidebarRightService {
    private readonly contentSubject = new BehaviorSubject<Content[] | null>(null);
    public readonly content$ = this.contentSubject.asObservable();

    public setContent(newContent: Content[] | null): void {
        this.contentSubject.next(newContent);
    }
}
