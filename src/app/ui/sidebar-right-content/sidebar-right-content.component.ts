import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'drevo-sidebar-right-content',
    standalone: true,
    imports: [MatListModule, RouterLink],
    templateUrl: './sidebar-right-content.component.html',
    styleUrl: './sidebar-right-content.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarRightContentComponent {}
