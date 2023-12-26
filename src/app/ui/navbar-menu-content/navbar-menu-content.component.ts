import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'drevo-navbar-menu-content',
    standalone: true,
    imports: [MatButtonModule, RouterLink],
    templateUrl: './navbar-menu-content.component.html',
    styleUrl: './navbar-menu-content.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMenuContentComponent {}
