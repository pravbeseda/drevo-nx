import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { LayoutService } from '../../core/services/layout.service';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SidebarLeftContentComponent } from '../sidebar-left-content/sidebar-left-content.component';
import { SidebarRightContentComponent } from '../sidebar-right-content/sidebar-right-content.component';

const MATERIAL_IMPORTS = [MatButtonModule];

@UntilDestroy()
@Component({
    selector: 'drevo-layout',
    standalone: true,
    imports: [
        ...MATERIAL_IMPORTS,
        NavbarComponent,
        AsyncPipe,
        MatListModule,
        MatSidenavModule,
        RouterLink,
        SidebarLeftContentComponent,
        SidebarRightContentComponent,
    ],
    providers: [ThemeService],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
    public readonly theme$ = this.themeService.currentTheme$;
    private readonly _mobileModeSubject = new BehaviorSubject<boolean>(true);
    public readonly mobileMode$ = this._mobileModeSubject.asObservable();
    constructor(
        private readonly themeService: ThemeService,
        private readonly layoutService: LayoutService
    ) {}

    ngOnInit(): void {
        this.layoutService.mobileQuery$
            .pipe(untilDestroyed(this))
            .subscribe(mobileQuery => {
                this._mobileModeSubject.next(mobileQuery.matches);
            });
    }

    public toggleSidebar(): void {
        this.layoutService.toggleSidebar();
    }
}
