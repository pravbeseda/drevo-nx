import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArticleContent } from '@shared/models/article-content';

@Injectable({
    providedIn: 'root',
})
export class SidebarRightService {
    private readonly contentSubject = new BehaviorSubject<ArticleContent | undefined>(undefined);
    public readonly content$ = this.contentSubject.asObservable();

    public setContent(newContent: ArticleContent | undefined): void {
        this.contentSubject.next(newContent);
    }
}
