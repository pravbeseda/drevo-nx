import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class LayoutService implements OnDestroy {
  private readonly mobileQuery: MediaQueryList;

  private readonly mobileQuerySubject = new ReplaySubject<MediaQueryList>(1);
  public readonly mobileQuery$ = this.mobileQuerySubject.asObservable();

  private readonly _sidebarOpened = new BehaviorSubject(false);
  public readonly sidebarOpened$ = this._sidebarOpened.asObservable();

  private readonly _mobileQueryUpdateHandler = () => {
    this.mobileQuerySubject.next(this.mobileQuery);
  };

  constructor(private readonly media: MediaMatcher) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryUpdateHandler();
    this.mobileQuery.addListener(this._mobileQueryUpdateHandler);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryUpdateHandler);
  }
  public toggleSidebar(): void {
    this._sidebarOpened.next(!this._sidebarOpened.getValue());
  }
}
