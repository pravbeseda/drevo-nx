import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'drevo-sidebar-left-content',
    standalone: true,
    imports: [MatListModule, RouterLink],
    templateUrl: './sidebar-left-content.component.html',
    styleUrl: './sidebar-left-content.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLeftContentComponent {}
