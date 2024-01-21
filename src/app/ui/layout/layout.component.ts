import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { LayoutService, ScreenSize } from '../../core/services/layout.service';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { SidebarLeftComponent } from '../sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from '../sidebar-right/sidebar-right.component';
import { map } from 'rxjs';

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
        SidebarLeftComponent,
        SidebarRightComponent,
    ],
    providers: [ThemeService],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
    public readonly theme$ = this.themeService.currentTheme$;
    public readonly isMobile$ = this.layoutService.isMobile$;
    public readonly isLargeScreen$ = this.layoutService.currentScreenSize$.pipe(
        map(size => size >= ScreenSize.Large)
    );

    constructor(
        private readonly themeService: ThemeService,
        private readonly layoutService: LayoutService
    ) {}
}
