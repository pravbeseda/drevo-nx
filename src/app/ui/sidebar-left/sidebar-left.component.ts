import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { LayoutService } from 'src/app/core/services/layout.service';
import { NavbarMenuContentComponent } from '../navbar-menu-content/navbar-menu-content.component';

@Component({
    selector: 'drevo-sidebar-left',
    standalone: true,
    imports: [MatListModule, RouterLink, AsyncPipe, NavbarMenuContentComponent],
    templateUrl: './sidebar-left.component.html',
    styleUrl: './sidebar-left.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLeftComponent {
    public readonly isMobile$ = this.layoutService.isMobile$;

    constructor(private readonly layoutService: LayoutService) {}
}
