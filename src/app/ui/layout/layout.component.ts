import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { LayoutService, ScreenSize } from '../../core/services/layout.service';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SidebarLeftContentComponent } from '../sidebar-left-content/sidebar-left-content.component';
import { SidebarRightContentComponent } from '../sidebar-right-content/sidebar-right-content.component';

const MATERIAL_IMPORTS = [MatButtonModule];

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
export class LayoutComponent {
    ScreenSize = ScreenSize;
    public readonly theme$ = this.themeService.currentTheme$;
    public readonly currentScreenSize$ = this.layoutService.currentScreenSize$;
    public readonly isMobile$ = this.layoutService.currentScreenSize$.pipe(
        map(size => size < ScreenSize.Medium)
    );

    constructor(
        private readonly themeService: ThemeService,
        private readonly layoutService: LayoutService
    ) {}

    public toggleSidebar(): void {
        this.layoutService.toggleSidebar();
    }
}
