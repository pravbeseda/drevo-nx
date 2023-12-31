import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { Theme, ThemeService } from '../../core/services/theme.service';
import { map } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import { NavbarMenuContentComponent } from '../navbar-menu-content/navbar-menu-content.component';
import { LayoutService } from '../../core/services/layout.service';
import { MatTooltipModule } from '@angular/material/tooltip';

const MATERIAL_IMPORTS = [MatButtonModule, MatIconModule, MatToolbarModule];

@Component({
    selector: 'drevo-navbar',
    standalone: true,
    imports: [
        ...MATERIAL_IMPORTS,
        RouterModule,
        ThemeSwitcherComponent,
        AsyncPipe,
        NgClass,
        NavbarMenuContentComponent,
        MatTooltipModule,
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    @Output() public readonly toggleLeftSidebar = new EventEmitter<void>();
    @Output() public readonly toggleRightSidebar = new EventEmitter<void>();

    public readonly isMobile$ = this.layoutService.isMobile$;
    public readonly theme$ = this.themeService.currentTheme$.pipe(
        map(theme => (theme === Theme.light ? Theme.green : ''))
    );

    constructor(
        private readonly themeService: ThemeService,
        private readonly layoutService: LayoutService
    ) {}
}
