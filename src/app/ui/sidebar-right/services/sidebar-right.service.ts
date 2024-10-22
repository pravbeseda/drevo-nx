import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Content } from '@shared/models/content';

@Injectable({
    providedIn: 'root',
})
export class SidebarRightService {
    private readonly contentSubject = new BehaviorSubject<Content | undefined>(undefined);
    public readonly content$ = this.contentSubject.asObservable();

    public setContent(newContent: Content | undefined): void {
        this.contentSubject.next(newContent);
    }
}
