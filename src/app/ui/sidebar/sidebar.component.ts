import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutService } from '../../core/services/layout.service';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NavbarComponent } from '../navbar/navbar.component';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Component({
    selector: 'drevo-sidebar',
    standalone: true,
    imports: [
        MatSidenavModule,
        MatListModule,
        RouterLink,
        AsyncPipe,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        NavbarComponent,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
    public readonly sidebarOpened$ = this.layoutService.sidebarOpened$;

    private readonly _mobileModeSubject = new BehaviorSubject<boolean>(true);
    public readonly mobileMode$ = this._mobileModeSubject.asObservable();

    constructor(private readonly layoutService: LayoutService) {}

    ngOnInit(): void {
        this.layoutService.mobileQuery$
            .pipe(untilDestroyed(this))
            .subscribe(mobileQuery => {
                this._mobileModeSubject.next(mobileQuery.matches);
            });
    }
}
