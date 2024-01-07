import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface TabLink {
    readonly label: string;
    readonly link: string;
}

@Component({
    selector: 'drevo-main',
    standalone: true,
    imports: [MatTabsModule, RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
    public readonly links: TabLink[] = [
        { label: 'Главная', link: '' },
        { label: 'Календарь', link: 'calendar' },
        { label: 'Новое', link: 'new' },
        { label: 'Популярное', link: 'popular' },
    ];
}
