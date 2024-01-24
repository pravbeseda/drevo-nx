import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ViewChild,
} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { SidebarRightService } from './services/sidebar-right.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { assertIsDefined } from '@shared/routines/utils';
import { BehaviorSubject, filter } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BookmarksComponent } from '../../pages/bookmarks/bookmarks.component';

@UntilDestroy()
@Component({
    selector: 'drevo-sidebar-right',
    standalone: true,
    imports: [
        MatListModule,
        RouterLink,
        AsyncPipe,
        MatTabsModule,
        NgIf,
        BookmarksComponent,
    ],
    templateUrl: './sidebar-right.component.html',
    styleUrl: './sidebar-right.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarRightComponent implements AfterViewInit {
    @ViewChild('tabGroup') tabGroup: MatTabGroup | undefined;

    public readonly content$ = this.sidebarRightService.content$;

    private readonly selectedTabIndexSubject = new BehaviorSubject<
        number | undefined
    >(undefined);
    public readonly selectedTabIndex$ =
        this.selectedTabIndexSubject.asObservable();

    constructor(private readonly sidebarRightService: SidebarRightService) {}

    ngAfterViewInit(): void {
        assertIsDefined(this.tabGroup, 'SidebarRightComponent tabGroup');
        this.content$
            .pipe(
                untilDestroyed(this),
                filter(content => !!content)
            )
            .subscribe(_ => {
                setTimeout(() => {
                    // Seems weird, but they both needs to make first tab active in all cases
                    this.tabGroup!.selectedIndex = 0;
                    this.selectedTabIndexSubject.next(0);
                }, 0);
            });
    }

    public tabChanged(tabIndex: number): void {
        this.selectedTabIndexSubject.next(tabIndex);
    }
}
