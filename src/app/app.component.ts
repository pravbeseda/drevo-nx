import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { NavigationService } from './core/services/navigation.service';

@Component({
    selector: 'drevo-root',
    standalone: true,
    imports: [RouterModule, LayoutComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    // NavigationService is injected here to support scrolling to anchors
    constructor(public readonly _navigationService: NavigationService) {}
}
